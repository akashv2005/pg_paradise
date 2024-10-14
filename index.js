// Property data
const properties = [
    {
        id: 1,
        image: "./images/house.webp",
        status: "Sharing",
        type: "Appartment",
        price: "&#8377;16,500/month",
        location: "Laxmi Nagar, New Delhi",
        person: "Male",
        beds: "2 Bed",
        baths: "1 Bath"
    },
    {
        id: 2,
        image: "./images/house2.jpeg",
        status: "For Rent",
        type: "Villa",
        price: "₹45,000/month",
        title: "Luxury Villa",
        location: "Koramangala, Bangalore",
        person: "Family",
        beds: "4 Bed",
        baths: "3 Bath"
    },
    {
        id: 3,
        image: "./images/house3.jpg",
        status: "Single",
        type: "Room",
        price: "₹16,000/month",
        title: "Spacious Urban Apartment",
        location: "Andheri West, Mumbai",
        person: "_",
        beds: "1 Bed",
        baths: "1 Bath"
    },
    {
        id: 4,
        image: "./images/house4.jpeg",
        status: "Sharing",
        type: "Appartment",
        price: "₹8,000/month",
        title: "Modern Shared Apartment",
        location: "Salt Lake, Kolkata",
        person: "Female",
        beds: "2 Bed",
        baths: "1 Bath"
    },
    {
        id: 5,
        image: "./images/house5.webp",
        status: "For Sell",
        type: "Villa",
        price: "₹1,25,00,000",
        title: "Spacious Villa with Garden",
        location: "Jubilee Hills, Hyderabad",
        person: "Family",
        beds: "5 Bed",
        baths: "4 Bath"
    },
    {
        id: 6,
        image: "./images/office1.jpg",
        status: "For Rent",
        type: "Office",
        price: "₹50,000/month",
        title: "Modern Office Space",
        location: "Connaught Place, New Delhi",
        person: "Corporate",
        beds: "Private Cabin",
        baths: "Meeting Room"
    },
    {
        id: 7,
        image: "./images/office2.png",
        status: "For Rent",
        type: "Office",
        price: "₹75,000/month",
        title: "Spacious Corporate Office",
        location: "Bandra Complex, Mumbai",
        person: "N/A",
        beds: "Private Cabin",
        baths: "Meeting Room"
    },
    {
        id: 8,
        image: "./images/office3.jpg",
        status: "For Sell",
        type: "Office",
        price: "₹1,20,00,000",
        title: "Prime Location Office",
        location: "MG Road, Bangalore",
        person: "Corporate",
        beds: "2 Private Cabin",
        baths: "2 Meeting Rooms"
    },
];

// Function to display properties on the dashboard
function displayProperties(properties) {
    const houseList = document.getElementById("houses");
    const officeList = document.getElementById("offices");
    
    if (houseList && officeList) {
        houseList.innerHTML = '';
        officeList.innerHTML = '';
        properties.forEach(property => {
            const propertyItem = `
                <div class="col-lg-4 col-md-6" id="card">
                    <div class="property-item rounded overflow-hidden">
                        <div class="position-relative overflow-hidden">
                            <a href="property-details.html?id=${property.id}"><img class="card-image" src="${property.image}" alt=""></a>
                            <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">${property.status}</div>
                            <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${property.type}</div>
                        </div>
                        <div class="p-4 pb-0">
                            <h5 class="text-primary mb-3">${property.price}</h5>
                            <p><i class="fa fa-map-marker-alt text-primary me-2"></i>${property.location}</p>
                            <a href="#" id="directions"><p><i class="fa fa-map-marker-alt text-primary me-2"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                           <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                         </svg> Directions</p></a>
                        </div>
                        <div class="d-flex border-top">
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text-primary me-2"></i>${property.person}</small>
                            <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary me-2"></i>${property.beds}</small>
                            <small class="flex-fill text-center py-2"><i class="fa fa-bath text-primary me-2"></i>${property.baths}</small>
                        </div>
                    </div>
                </div>
            `;
            if (property.type === "Office") {
                officeList.innerHTML += propertyItem;
            } else {
                houseList.innerHTML += propertyItem;
            }
        });
    }
}

// Function to get property details by ID
function getPropertyById(id) {
    return properties.find(property => property.id === parseInt(id));
}

// Function to display property details
function displayPropertyDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get('id');
    const property = getPropertyById(propertyId);

    if (property) {
        // Update the page with property details
        document.getElementById('property-name').textContent = property.title || `${property.type} in ${property.location}`;
        document.getElementById('property-address').textContent = property.location;
        document.getElementById('property-rent').textContent = property.price;
        document.getElementById('property-sharing').textContent = property.status;
        document.getElementById('property-beds').textContent = property.beds;
        document.getElementById('property-baths').textContent = property.baths;

        // Update the image
        const imageContainer = document.querySelector('.image-placeholder');
        imageContainer.innerHTML = `
            <img src="${property.image}" alt="${property.type}" 
                 style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
        `;

        // You can add more details as needed
    } else {
        // Handle case where property is not found
        document.body.innerHTML = '<h1>Property not found</h1>';
    }
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the dashboard page
    if (document.getElementById('houses') && document.getElementById('offices')) {
        // Initial display of properties
        displayProperties(properties);

        // Location filter functionality
        const locationFilter = document.getElementById('locationFilter');
        if (locationFilter) {
            locationFilter.addEventListener('input', function() {
                const filterValue = this.value.toLowerCase();
                const filteredProperties = properties.filter(property => 
                    property.location.toLowerCase().includes(filterValue)
                );
                displayProperties(filteredProperties);
            });
        }
    } 
    // Check if we're on the property details page
    else if (document.getElementById('property-name')) {
        displayPropertyDetails();
    }
});

