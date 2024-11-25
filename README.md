# HEXA - Power Your Gaming with the Best Graphics Cards

Welcome to **HEXA**, your one-stop destination for all things graphics cards! Whether you're a hardcore gamer, a 3D designer, or simply upgrading your PC, we have the perfect GPU to meet your performance needs.

## Home Page

The homepage features:
- **HEXA Branding**: Introducing the best graphics cards to power your gaming and design experience.
- **Featured Products**: Displaying top-selling products such as:
  - **NVIDIA RTX 4090**: The ultimate gaming experience with unmatched performance and ray tracing technology.
  - **AMD Radeon RX 7900 XTX**: Power-packed performance for both gamers and creators.
  - **NVIDIA RTX 3060 Ti**: The perfect balance of power and price for everyday gaming.
- **Brands We Carry**: Top brands like NVIDIA, AMD, ASUS, MSI, and GIGABYTE.
- **Why Shop With Us?**: Competitive prices, expert advice, fast shipping, and a 30-day satisfaction guarantee.

## Blog Page

The blog section features posts to keep you updated on the latest trends in graphics cards and gaming technology. The blog includes:
- **New Blog Title 1**: Read more
- **Second Blog Title**: Read more

## Project Setup

This project consists of two main components:
1. **Frontend**: The homepage and blog page (Static site generated with 11ty).
2. **Backend**: Strapi for managing content such as blog posts.

### Prerequisites

Ensure you have the following installed before getting started:
- **Node.js** (version 18.0.0 or higher)
- **npm** (version 6.0.0 or higher)

### Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/hexa.git
   cd hexa
   ```

2. **Install Dependencies**:

   Run the following command to install both frontend and backend dependencies:

   ```bash
   npm install
   ```

3. **Start the Frontend**:

   To run the static site (frontend) generated by 11ty, use the following command:

   ```bash
   npm run start
   ```

   This will build the site and start the development server. You can access the site at `http://localhost:8080`.

4. **Start the Strapi Backend**:

   To start the Strapi server (backend) and manage blog content, run the following command:

   ```bash
   npm run develop
   ```

   This will start the Strapi development server at `http://localhost:1337`. You'll be able to access the Strapi admin panel here to manage blog posts and other content.

### Available Scripts

- **`npm run start`**: Starts the 11ty static site server on `http://localhost:8080`.
- **`npm run develop`**: Starts the Strapi server on `http://localhost:1337` for backend content management.
- **`npm run build`**: Builds the static site for production.
- **`npm run deploy`**: Deploys the Strapi project.

### Folder Structure

- **`/public`**: Contains the static assets for the frontend.
- **`/src`**: Contains the source files for the static site.
- **`/admin`**: The Strapi admin panel and its configuration.
- **`/api`**: Strapi API content models and endpoints.

### Technologies Used

- **Frontend**: 11ty (Static Site Generator)
- **Backend**: Strapi (Headless CMS)
- **Database**: SQLite (via Strapi plugin)

### Contributing

Feel free to fork this project, make changes, and open pull requests. Contributions are welcome!

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



