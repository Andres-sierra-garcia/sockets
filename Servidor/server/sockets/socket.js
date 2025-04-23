export function configureSockets(io) {
    io.on("connection", (socket) => {
        console.log("🟢 Usuario conectado:", socket.id);

        // Enviar mensaje de bienvenida
        socket.emit("welcomeMessage", {
            user: "Admin",
            message: "Bienvenido a la aplicación",
        });

        // Manejar desconexión
        socket.on("disconnect", () => {
            console.log("🔴 Usuario desconectado:", socket.id);
        });

        // Manejar mensajes recibidos
        socket.on("receiveMessage", (message, callback) => {
            console.log("📩 Mensaje recibido:", message);

            // Confirmar recepción
            callback({ status: "success", message: "Mensaje recibido" });

            // Difundir a todos los clientes
            io.emit("noticeForAll", {
                user: message.user,
                message: message.message,
                timestamp: new Date().toISOString()
            });
        });

        // Manejar errores
        socket.on("error", (error) => {
            console.error("❌ Error en el socket:", error);
        });
    });
}