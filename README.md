# ActionPilot

### Secure GitHub App for Embedded Linux and CI/CD Automation

ActionPilot is a GitHub App designed to automate embedded Linux development workflows, Yocto builds, Raspberry Pi 5 kernel compilation, bootloader integration, and DevOps CI/CD pipelines using GitHub Actions.

It provides secure GitHub authentication using GitHub App tokens instead of Personal Access Tokens (PATs), enabling safer and scalable automation for modern infrastructure and embedded systems development.

---

# Features

* GitHub App authentication
* Secure runtime token generation
* GitHub Actions integration
* Yocto build automation
* Raspberry Pi 5 kernel build workflows
* Bootloader build and deployment automation
* CI/CD pipeline orchestration
* Repository automation and release workflows
* Secure repository checkout using GitHub App tokens
* Infrastructure-friendly automation design

---

# Use Cases

ActionPilot can be used for:

* Embedded Linux CI/CD pipelines
* Yocto image build automation
* Raspberry Pi 5 kernel compilation workflows
* U-Boot and bootloader automation
* Automated package builds
* Release artifact generation
* GitHub repository orchestration
* Multi-repository workflow automation
* Self-hosted runner workflows
* DevOps infrastructure pipelines

---

# Architecture

```text
GitHub App
    ↓
JWT Authentication
    ↓
Installation Access Token
    ↓
GitHub Actions Runtime
    ↓
Build / Deploy / Release Workflows
```

---

# GitHub App Permissions

Recommended permissions:

| Permission    | Access       |
| ------------- | ------------ |
| Contents      | Read & Write |
| Metadata      | Read-only    |
| Pull Requests | Read & Write |
| Actions       | Read & Write |
| Workflows     | Read & Write |

Adjust permissions according to your security requirements.

---

# Installation

## 1. Create GitHub App

Create a GitHub App from:

[https://github.com/settings/apps](https://github.com/settings/apps)

---

## 2. Generate Private Key

Inside the GitHub App settings:

* Open `Private keys`
* Click `Generate a private key`
* Save the `.pem` file securely

---

## 3. Install the App

Install the app to your repositories.

After installation, GitHub provides:

* App ID
* Installation ID
* Private Key

---

# GitHub Actions Setup

Add the following secrets to your repository:

| Secret              | Description                |
| ------------------- | -------------------------- |
| APP_ID              | GitHub App ID              |
| APP_PRIVATE_KEY     | GitHub App private key     |
| APP_INSTALLATION_ID | GitHub App installation ID |

---

# Example Workflow

```yaml
name: ActionPilot Pipeline

on:
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Generate GitHub App Token
        id: app-token
        uses: actions/create-github-app-token@v1
        with:
          app-id: ${{ secrets.APP_ID }}
          private-key: ${{ secrets.APP_PRIVATE_KEY }}

      - name: Checkout Repository
        uses: actions/checkout@v4
        with:
          token: ${{ steps.app-token.outputs.token }}

      - name: Verify Access
        run: |
          git status
```

---

# Yocto Workflow Example

```yaml
- name: Build Yocto Image
  run: |
    source oe-init-build-env
    bitbake core-image-minimal
```

---

# Raspberry Pi 5 Kernel Build Example

```yaml
- name: Build Raspberry Pi 5 Kernel
  run: |
    make ARCH=arm64 bcm2712_defconfig
    make -j$(nproc)
```

---

# Bootloader Workflow Example

```yaml
- name: Build U-Boot
  run: |
    make rpi_arm64_defconfig
    make -j$(nproc)
```

---

# Security Benefits

ActionPilot uses GitHub App authentication instead of Personal Access Tokens.

Benefits include:

* Short-lived tokens
* Improved repository security
* Fine-grained permissions
* Easier credential rotation
* Organization-friendly access control
* Reduced credential exposure in CI/CD

---

# Repository Structure

```text
.github/
 └── workflows/

scripts/

yocto/

kernel/

bootloader/

README.md
```

---

# Recommended Usage

ActionPilot works well with:

* GitHub Actions
* Self-hosted runners
* Yocto Project
* Buildroot
* Raspberry Pi 5
* Embedded Linux platforms
* CI/CD infrastructure
* Release engineering pipelines

---

# Future Roadmap

Planned improvements:

* Automated release generation
* Artifact signing
* OTA deployment workflows
* Multi-board build orchestration
* Docker-based build environments
* Advanced caching support
* Build monitoring dashboards
* Deployment automation

---

# License

MIT License

---

# Author

Developed and maintained by Naveen.

---

# ActionPilot

### Intelligent Embedded Linux and DevOps Automation for GitHub Actions
