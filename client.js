// JavaScript to add interactivity to the Clients page

// Example client data array (You can replace this with actual data from a server or database)
const clients = [
    {
        name: "Client 1",
        description: "We helped Client 1 to revamp their online presence with a cutting-edge e-commerce platform.",
        logo: "client1.jpg",
        category: "Web Development"
    },
    {
        name: "Client 2",
        description: "For Client 2, we developed a custom CMS solution that streamlined their content management.",
        logo: "client2.jpg",
        category: "Content Management"
    },
    {
        name: "Client 3",
        description: "Client 3 benefited from our expertise in building a mobile-friendly web application.",
        logo: "client3.jpg",
        category: "Mobile Development"
    },
    {
        name: "Client 4",
        description: "We partnered with Client 4 to design a brand-new website that boosted their online visibility.",
        logo: "client4.jpg",
        category: "Web Design"
    }
];

// Function to render clients dynamically on the page
function renderClients(clientArray) {
    const clientSection = document.querySelector('.clients-section');
    clientSection.innerHTML = ''; // Clear existing content

    clientArray.forEach(client => {
        const clientCard = `
            <div class="client-card">
                <img src="${client.logo}" alt="${client.name} Logo">
                <h2>${client.name}</h2>
                <p>${client.description}</p>
            </div>
        `;
        clientSection.innerHTML += clientCard;
    });
}

// Function to filter clients based on category
function filterClients(category) {
    const filteredClients = clients.filter(client => client.category === category || category === 'All');
    renderClients(filteredClients);
}

// Event listener for category filtering (If you add filtering buttons or dropdowns)
// Example: document.querySelector('#filter-select').addEventListener('change', (e) => filterClients(e.target.value));

// Initial render of all clients
document.addEventListener('DOMContentLoaded', () => {
    renderClients(clients);
});
