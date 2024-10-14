# Usa la imagen base de Ubuntu 22.04
FROM ubuntu:22.04

# Actualiza la imagen e instala sudo
RUN apt-get update && apt-get install -y sudo && apt-get clean && rm -rf /var/lib/apt/lists/*

# Crea el usuario "arheanja" y agrégalo al grupo sudo
RUN useradd -ms /bin/bash arheanja && \
    echo 'arheanja:password' | chpasswd && \
    usermod -aG sudo arheanja && \
    echo 'arheanja ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers

# Cambia al usuario "arheanja"
USER arheanja

# Establece el directorio de trabajo
WORKDIR /workspace

# Configura el entorno (si es necesario)
ENV HOME /home/arheanja