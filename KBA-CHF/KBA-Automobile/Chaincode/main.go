package main

import (
	"log"

	"github.com/hyperledger/fabric-contract-api-go/contractapi"
)

func main() {
	carContract := new(CarContract)
	orderContract := new(OrderContract)

	chaincode, err := contractapi.NewChaincode(carContract, orderContract)
	if err != nil {
		log.Panicf("Could not create chaincode: %v", err)
	}

	err = chaincode.Start()
	if err != nil {
		log.Panicf("Failed to start chaincode: %v", err)
	}
}
