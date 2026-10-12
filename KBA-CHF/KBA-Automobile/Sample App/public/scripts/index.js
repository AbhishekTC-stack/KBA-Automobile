const addData = async (event) => {
    event.preventDefault();

    const carId = document.getElementById("carId").value;
    const make = document.getElementById("make").value;
    const model = document.getElementById("model").value;
    const color = document.getElementById("color").value;
    const dateOfManufacture =
        document.getElementById("dateOfManufacture").value;
    const manufacturerName =
        document.getElementById("manufacturerName").value;

    const carData = {
        carId,
        make,
        model,
        color,
        dateOfManufacture,
        manufacturerName,
    };

    if (
        !carId.trim() ||
        !make.trim() ||
        !model.trim() ||
        !color.trim() ||
        !dateOfManufacture ||
        !manufacturerName.trim()
    ) {
        alert("Please enter the data properly.");
        return;
    }

    try {
        const response = await fetch("/api/car", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(carData),
        });

        const responseText = await response.text();

        console.log("HTTP Status:", response.status);
        console.log("Backend response:", responseText);

        if (!response.ok) {
            alert(
                `Failed to create car (${response.status}). Check the backend terminal and browser console.`
            );
            return;
        }

        let data = {};

        if (responseText) {
            try {
                data = JSON.parse(responseText);
            } catch {
                data = { message: responseText };
            }
        }

        console.log("DATA:", data);
        alert("Car Created Successfully!");

    } catch (err) {
        console.error("Request error:", err);
        alert("Unable to connect to the backend.");
    }
};

const readData = async (event) => {
event.preventDefault();
const carId = document.getElementById("carIdInput").value;if (carId.length == 0) {
alert("Please enter a valid ID.");
} else {
try {
             const response=await fetch(`/api/car/${carId}`);
let responseData = await response.json();
console.log("response data:", responseData);
alert(JSON.stringify(responseData));
} catch (err) {
alert("Error");
console.log(err);
}
}
};
