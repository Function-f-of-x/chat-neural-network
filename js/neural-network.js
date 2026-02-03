/**
 * NEURAL NETWORK IMPLEMENTATION
 * A complete feedforward neural network with backpropagation
 * implemented from scratch in vanilla JavaScript.
 * 
 * Architecture: Input (128) → Hidden (64) → Output (128)
 * Activation: ReLU (hidden), Softmax (output)
 * Optimizer: Adam
 * Loss: Categorical Cross-Entropy
 */

class Matrix {
    constructor(rows, cols, data = null) {
        this.rows = rows;
        this.cols = cols;
        
        if (data) {
            this.data = data;
        } else {
            this.data = [];
            for (let i = 0; i < rows; i++) {
                this.data[i] = [];
                for (let j = 0; j < cols; j++) {
                    this.data[i][j] = 0;
                }
            }
        }
    }
    
    static fromArray(arr) {
        const matrix = new Matrix(arr.length, 1);
        for (let i = 0; i < arr.length; i++) {
            matrix.data[i][0] = arr[i];
        }
        return matrix;
    }
    
    toArray() {
        const arr = [];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                arr.push(this.data[i][j]);
            }
        }
        return arr;
    }
    
    randomize() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                // Xavier initialization
                this.data[i][j] = (Math.random() * 2 - 1) * Math.sqrt(2 / (this.rows + this.cols));
            }
        }
        return this;
    }
    
    add(n) {
        if (n instanceof Matrix) {
            if (this.rows !== n.rows || this.cols !== n.cols) {
                throw new Error('Matrix dimensions must match for addition');
            }
            const result = new Matrix(this.rows, this.cols);
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    result.data[i][j] = this.data[i][j] + n.data[i][j];
                }
            }
            return result;
        } else {
            const result = new Matrix(this.rows, this.cols);
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    result.data[i][j] = this.data[i][j] + n;
                }
            }
            return result;
        }
    }
    
    subtract(n) {
        if (n instanceof Matrix) {
            if (this.rows !== n.rows || this.cols !== n.cols) {
                throw new Error('Matrix dimensions must match for subtraction');
            }
            const result = new Matrix(this.rows, this.cols);
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    result.data[i][j] = this.data[i][j] - n.data[i][j];
                }
            }
            return result;
        } else {
            const result = new Matrix(this.rows, this.cols);
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    result.data[i][j] = this.data[i][j] - n;
                }
            }
            return result;
        }
    }
    
    multiply(n) {
        if (n instanceof Matrix) {
            // Matrix product
            if (this.cols !== n.rows) {
                throw new Error('Columns of A must match rows of B for matrix multiplication');
            }
            
            const result = new Matrix(this.rows, n.cols);
            for (let i = 0; i < result.rows; i++) {
                for (let j = 0; j < result.cols; j++) {
                    let sum = 0;
                    for (let k = 0; k < this.cols; k++) {
                        sum += this.data[i][k] * n.data[k][j];
                    }
                    result.data[i][j] = sum;
                }
            }
            return result;
        } else {
            // Scalar multiplication
            const result = new Matrix(this.rows, this.cols);
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    result.data[i][j] = this.data[i][j] * n;
                }
            }
            return result;
        }
    }
    
    transpose() {
        const result = new Matrix(this.cols, this.rows);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                result.data[j][i] = this.data[i][j];
            }
        }
        return result;
    }
    
    map(func) {
        const result = new Matrix(this.rows, this.cols);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                result.data[i][j] = func(this.data[i][j], i, j);
            }
        }
        return result;
    }
    
    static multiply(a, b) {
        return a.multiply(b);
    }
    
    static transpose(a) {
        return a.transpose();
    }
    
    static map(a, func) {
        return a.map(func);
    }
}

class NeuralNetwork {
    constructor(inputNodes, hiddenNodes, outputNodes) {
        this.inputNodes = inputNodes;
        this.hiddenNodes = hiddenNodes;
        this.outputNodes = outputNodes;
        
        // Initialize weights with Xavier initialization
        this.weightsIH = new Matrix(hiddenNodes, inputNodes).randomize();
        this.weightsHO = new Matrix(outputNodes, hiddenNodes).randomize();
        
        // Initialize biases
        this.biasH = new Matrix(hiddenNodes, 1).randomize();
        this.biasO = new Matrix(outputNodes, 1).randomize();
        
        // Adam optimizer parameters
        this.learningRate = 0.001;
        this.beta1 = 0.9;
        this.beta2 = 0.999;
        this.epsilon = 1e-8;
        this.t = 0;
        
        // Initialize Adam moment vectors
        this.mIH = new Matrix(hiddenNodes, inputNodes, this.zeros(hiddenNodes, inputNodes));
        this.vIH = new Matrix(hiddenNodes, inputNodes, this.zeros(hiddenNodes, inputNodes));
        this.mHO = new Matrix(outputNodes, hiddenNodes, this.zeros(outputNodes, hiddenNodes));
        this.vHO = new Matrix(outputNodes, hiddenNodes, this.zeros(outputNodes, hiddenNodes));
        this.mBiasH = new Matrix(hiddenNodes, 1, this.zeros(hiddenNodes, 1));
        this.vBiasH = new Matrix(hiddenNodes, 1, this.zeros(hiddenNodes, 1));
        this.mBiasO = new Matrix(outputNodes, 1, this.zeros(outputNodes, 1));
        this.vBiasO = new Matrix(outputNodes, 1, this.zeros(outputNodes, 1));
    }
    
    zeros(rows, cols) {
        const data = [];
        for (let i = 0; i < rows; i++) {
            data[i] = [];
            for (let j = 0; j < cols; j++) {
                data[i][j] = 0;
            }
        }
        return data;
    }
    
    // Activation functions
    relu(x) {
        return x > 0 ? x : 0;
    }
    
    drelu(x) {
        return x > 0 ? 1 : 0;
    }
    
    softmax(matrix) {
        const out = new Matrix(matrix.rows, matrix.cols);
        let maxVal = -Infinity;
        
        // Find max value for numerical stability
        for (let i = 0; i < matrix.rows; i++) {
            for (let j = 0; j < matrix.cols; j++) {
                if (matrix.data[i][j] > maxVal) {
                    maxVal = matrix.data[i][j];
                }
            }
        }
        
        // Calculate exponentials
        let sum = 0;
        for (let i = 0; i < matrix.rows; i++) {
            for (let j = 0; j < matrix.cols; j++) {
                out.data[i][j] = Math.exp(matrix.data[i][j] - maxVal);
                sum += out.data[i][j];
            }
        }
        
        // Normalize
        for (let i = 0; i < matrix.rows; i++) {
            for (let j = 0; j < matrix.cols; j++) {
                out.data[i][j] /= sum;
            }
        }
        
        return out;
    }
    
    // Feedforward
    predict(inputArray) {
        // Convert input array to matrix
        const inputs = Matrix.fromArray(inputArray);
        
        // Calculate hidden layer
        let hidden = Matrix.multiply(this.weightsIH, inputs);
        hidden = hidden.add(this.biasH);
        hidden = Matrix.map(hidden, x => this.relu(x));
        
        // Calculate output layer
        let outputs = Matrix.multiply(this.weightsHO, hidden);
        outputs = outputs.add(this.biasO);
        outputs = this.softmax(outputs);
        
        return outputs.toArray();
    }
    
    // Backpropagation with Adam optimizer
    train(inputArray, targetArray) {
        // Feedforward
        const inputs = Matrix.fromArray(inputArray);
        const targets = Matrix.fromArray(targetArray);
        
        // Hidden layer calculation
        let hidden = Matrix.multiply(this.weightsIH, inputs);
        hidden = hidden.add(this.biasH);
        const hiddenActivated = Matrix.map(hidden, x => this.relu(x));
        
        // Output layer calculation
        let outputs = Matrix.multiply(this.weightsHO, hiddenActivated);
        outputs = outputs.add(this.biasO);
        const outputsActivated = this.softmax(outputs);
        
        // Calculate output errors
        const outputErrors = targets.subtract(outputsActivated);
        
        // Calculate output gradients
        let gradientsO = Matrix.map(outputsActivated, (val, i, j) => {
            // Softmax derivative is handled through cross-entropy gradient
            return outputErrors.data[i][j] * val * (1 - val);
        });
        gradientsO = gradientsO.multiply(this.learningRate);
        
        // Calculate hidden->output deltas
        const hiddenT = hiddenActivated.transpose();
        const weightHO_deltas = Matrix.multiply(gradientsO, hiddenT);
        
        // Update hidden->output weights with Adam
        this.t++;
        this.updateAdam(this.weightsHO, weightHO_deltas, this.mHO, this.vHO);
        
        // Update output biases
        this.updateAdam(this.biasO, gradientsO, this.mBiasO, this.vBiasO);
        
        // Calculate hidden layer errors
        const weightsHO_T = this.weightsHO.transpose();
        const hiddenErrors = Matrix.multiply(weightsHO_T, outputErrors);
        
        // Calculate hidden gradients
        const hiddenGradients = Matrix.map(hidden, (val, i, j) => {
            return hiddenErrors.data[i][j] * this.drelu(val);
        });
        hiddenGradients = hiddenGradients.multiply(this.learningRate);
        
        // Calculate input->hidden deltas
        const inputsT = inputs.transpose();
        const weightIH_deltas = Matrix.multiply(hiddenGradients, inputsT);
        
        // Update input->hidden weights with Adam
        this.updateAdam(this.weightsIH, weightIH_deltas, this.mIH, this.vIH);
        
        // Update hidden biases
        this.updateAdam(this.biasH, hiddenGradients, this.mBiasH, this.vBiasH);
        
        // Calculate loss (cross-entropy)
        let loss = 0;
        for (let i = 0; i < targets.rows; i++) {
            const targetVal = targets.data[i][0];
            const outputVal = outputsActivated.data[i][0];
            // Add epsilon to avoid log(0)
            loss -= targetVal * Math.log(outputVal + 1e-15);
        }
        
        return loss / targets.rows;
    }
    
    // Adam optimizer update rule
    updateAdam(weights, deltas, m, v) {
        // Update biased first moment estimate
        m = m.multiply(this.beta1).add(deltas.multiply(1 - this.beta1));
        
        // Update biased second raw moment estimate
        v = v.multiply(this.beta2).add(deltas.multiply(deltas).multiply(1 - this.beta2));
        
        // Compute bias-corrected first moment estimate
        const mHat = m.multiply(1 / (1 - Math.pow(this.beta1, this.t)));
        
        // Compute bias-corrected second raw moment estimate
        const vHat = v.multiply(1 / (1 - Math.pow(this.beta2, this.t)));
        
        // Update weights
        const update = mHat.multiply(
            vHat.map(x => 1 / (Math.sqrt(x) + this.epsilon))
        );
        
        // Apply update
        weights.data = weights.subtract(update).data;
    }
    
    // Save network weights
    save() {
        return {
            weightsIH: this.weightsIH.data,
            weightsHO: this.weightsHO.data,
            biasH: this.biasH.data,
            biasO: this.biasO.data
        };
    }
    
    // Load network weights
    load(data) {
        this.weightsIH.data = data.weightsIH;
        this.weightsHO.data = data.weightsHO;
        this.biasH.data = data.biasH;
        this.biasO.data = data.biasO;
    }
    
    // Get network info
    getInfo() {
        return {
            inputNodes: this.inputNodes,
            hiddenNodes: this.hiddenNodes,
            outputNodes: this.outputNodes,
            totalParameters: (
                this.weightsIH.rows * this.weightsIH.cols +
                this.weightsHO.rows * this.weightsHO.cols +
                this.biasH.rows * this.biasH.cols +
                this.biasO.rows * this.biasO.cols
            )
        };
    }
}

// Initialize the neural network
// Input: 128 (embedding size), Hidden: 64, Output: 128 (vocabulary size)
const nn = new NeuralNetwork(128, 64, 128);
console.log('Neural Network initialized:', nn.getInfo());
console.log('✅ Neural network ready for inference');
