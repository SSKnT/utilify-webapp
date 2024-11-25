# Utilify-webapp

A full-stack web app offering a suite of small tools for text, image, and file utilities. Built with React, Django, and Django REST framework, Utilify provides a seamless and efficient utility management experience.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Text utilities (e.g., summarization, analysis)
- Image utilities (e.g., resizing, extracting metadata)
- File utilities (e.g., conversion)
- User-friendly interface with real-time updates
---

## Installation

To get started with Utilify-webapp locally, follow these steps:

#### 1. Clone the repository
```bash
git clone https://github.com/yourusername/Utilify-webapp.git
```
---

#### 2. Navigate to the project directory

```bash
cd Utilify-webapp
```
---

#### 3. Set up the backend (Django)

#### Inside the `Django` folder:
- Install dependencies:
  ```bash
  cd utility-apis
  pip install -r requirements.txt
  python manage.py migrate
  python manage.py runserver

  
---

### Step 4: Set up the frontend (React)

#### Inside the `React` folder:
- Install dependencies:
  ```bash
  cd Utilify
  npm install
  npm start
  ```

### 5. API Features and Libraries

#### Features provided by the APIs in the Django backend:

- **Image Features:**
  - Background Removal (`bg removal`)
  - Compression (`compression`)
  - Metadata Extraction (`extract metadata`)
  - Image Merging (`merge img`)

- **Text Features:**
  - Text Summarization (`summarize`)
  - Text Analysis (`analyze`)
  - Fortune Generation (`fortune`)

- **File Features:**
  - Convert Markdown to PDF (`markdown to pdf`)

#### Key libraries used in the Django backend:
- **rembg**: For image background removal.
- **fpdf**: For PDF generation.
- **sumy**: For text summarization.
- **exfil**: For metadata extraction.
- **re**: For regular expressions (used in various text processing).
- **PIL** (Pillow): For image processing tasks.
- **BytesIO**: To handle in-memory byte streams.
- **textBlob**: For text processing and analysis.

### 6. Frontend (React) Libraries and Hooks

#### Libraries used in the React frontend:
- **Shadcn**: A UI component library that helps in building beautiful and consistent user interfaces.
- **Sonner**: A library used for creating Toast notifications in the frontend.
- **Axios**: A promise-based HTTP client for making requests to the Django APIs.

#### React Hooks used:
- **useState**: A hook that allows you to manage state in functional components.
- **useEffect**: A hook used to perform side effects in functional components, such as fetching data or manipulating the DOM.

### 7. Folder Structure

The project is organized into two main folders:
- **Django**: Contains the Django REST framework project that serves all the backend APIs.
- **React**: Contains the React frontend project that handles the user interface and makes requests to the Django APIs.

#### Example folder structure:

```plaintext
Utilify-webapp/
├── Django/
│   └──utility-apis
│      ├── api/
│      ├── settings/
│      ├── requirements.txt
│      ├── manage.py
│      └── ...
├── React/
│   └──Utilify
│      ├── public/
│      ├── src/
│      ├── package.json
│      └── ...
```


---

### Step 8: Contributing

### 8. Contributing

If you'd like to contribute to the project, follow these steps:

1. Fork the repository.
2. Clone your forked repository:
   ```bash
   git clone https://github.com/SSKnT/Utilify-webapp.git
   ```
3. Create a new branch for your changes:
   ```bash
   git checkout -b feature-branch
   ```
4. Commit your changes:
   ```bash
   git commit -m "Describe your changes"
   ```
5. Push your changes to your fork:
   ```bash
   git push origin feature-branch
   ```
6. Create a pull request from your fork to the main repo.


---

### Step 9: License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
