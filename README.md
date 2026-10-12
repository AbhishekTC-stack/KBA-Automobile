# KBA Automobile 🚗

A blockchain-based automobile management application built using **Hyperledger Fabric, Go, and JavaScript**. The project demonstrates how automobile records can be created and queried using a permissioned blockchain network.

## 📌 Project Overview

KBA Automobile uses Hyperledger Fabric to manage automobile records on a blockchain ledger. A web application communicates with a Go backend, which submits transactions to smart contracts deployed on the Fabric network.

The project is designed to explore blockchain-based automobile record management, transaction processing, and event listening.

## ✨ Features

- **Create Car:** Register automobile details on the blockchain.
- **Query Car:** Retrieve an automobile record using its Car ID.
- **Smart Contracts:** Implement automobile operations using Go chaincode.
- **REST API:** Connect the web application to the blockchain through a Go backend.
- **Blockchain Ledger:** Store automobile records on Hyperledger Fabric.
- **Event Listening:** Experiment with block events, chaincode events, and private-data block events.

## 🛠️ Technologies Used

- **Blockchain:** Hyperledger Fabric
- **Smart Contracts:** Go
- **Backend:** Go and Gin
- **Frontend:** HTML, CSS, JavaScript
- **API Communication:** REST API and JSON
- **Development Environment:** Linux
- **Version Control:** Git and GitHub

## 📂 Project Structure

The project contains the following main components:

```text
KBA-CHF/
├── KBA-Automobile/
│   ├── Chaincode/
│   │   └── Go smart contracts
│   ├── EVENT/
│   │   └── event.go
│   │   └── main.go
│   └── Sample App/
│       ├── main.go
│       ├── client.go
│       └── web application files
└── fabric-samples/
    └── test-network/
```

*Note: Adjust the file names and folders in this tree to match your actual repository before publishing.*

## ⚙️ Prerequisites

Install and configure the following:

- Go
- Node.js, if required by your frontend tooling
- Git
- Docker and Docker Compose
- Hyperledger Fabric binaries, samples, and container images

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd KBA-CHF
```

Replace `<YOUR_GITHUB_REPOSITORY_URL>` with your actual GitHub repository URL.

### 2. Start the Hyperledger Fabric network

Navigate to the Fabric test network:

```bash
cd fabric-samples/test-network
```

Start the network and create the application channel:

```bash
./network.sh up createChannel -c autochannel
```

### 3. Deploy the chaincode

From the `fabric-samples/test-network` directory, deploy the automobile chaincode:

```bash
./network.sh deployCC \
  -ccn KBA-Automobile \
  -ccp ../../KBA-Automobile/Chaincode/ \
  -ccl go \
  -c autochannel \
  -ccv 4.0 \
  -ccs 4 \
  -cccg ../../KBA-Automobile/Chaincode/collections.json
```

Ensure that the chaincode version, sequence, collection configuration, and network state match your current setup before running this command.

### 4. Run the Go backend

Navigate to the Sample App directory:

```bash
cd "../../KBA-Automobile/Sample App"
```

Run the application:

```bash
go run .
```

The web application uses the backend API at:

```text
http://localhost:8080
```

### 5. Test the application

1. Open `http://localhost:8080` in your browser.
2. Enter the automobile details in the Create Car form.
3. Use a unique Car ID, such as `Car-10`, if it is not already present on the ledger.
4. Click **Create Car**.
5. Use the Query Car feature to retrieve the saved record.

## 🔗 API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/car` | Create a car record |
| GET | `/api/car/:carId` | Query a car by its ID |

The POST endpoint accepts JSON automobile details, including the car ID, make, model, color, manufacture date, and manufacturer name.

## 🔔 Event Listener

The project also contains Go code for exploring Hyperledger Fabric events:

- Block events
- Chaincode events
- Block and private-data events

These listeners can be used to observe blockchain activity. Chaincode events require the smart contract to emit the relevant events.

## 🧪 Testing

Test the application by:

- Creating a car with a unique ID.
- Querying an existing car by ID.
- Checking backend logs when a transaction fails.
- Verifying that duplicate car IDs are handled by the chaincode.
- Testing event listeners after generating new blockchain transactions.

## 🔒 Important Notes

- Automobile IDs must be unique when creating new records.
- Fabric network configuration and identity credentials must be configured correctly.
- Do not commit private keys, certificates containing sensitive material, passwords, or other secrets to GitHub.
- A newly cloned environment may require additional Fabric configuration before the application can run.

## 🎯 Project Goal

The goal of KBA Automobile is to demonstrate how blockchain technology can support transparent, verifiable, and permissioned automobile record management.

## 👨‍💻 Author

Developed as a Hyperledger Fabric automobile management project.
