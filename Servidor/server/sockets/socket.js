let ticketTail = [];
let ticketesCounter = 0;

export function configureSockets(io) {
    io.on("connection", (socket) => {
        console.log("🟢 Usuario conectado:", socket.id);

        socket.emit("welcomeMessage", {
            user: "Admin",
            message: "Bienvenido a la aplicación",
        });

        socket.on("disconnect", () => {
            console.log("🔴 Usuario desconectado:", socket.id);
        });

        socket.on("generateTicket", (data, callback) => {
            console.log("📩 Mensaje recibido:", data);
            ticketesCounter++;
            callback({
                status: "success",
                message: "Mensaje recibido",
                data: {
                    ticket: ticketesCounter,
                },
            });
            ticketTail.push({
                name:data.name,
                id: data.id,
                ticket: ticketesCounter,
            });

            io.emit('mainScreen',{
                ticketTail:ticketTail
            })

            io.emit('updateQuantityTickets',{
                quantity:ticketTail.length
            })
        });

        socket.on('verifyTickets',(data,callback)=>{
            let amountOfTicketes = ticketTail.length
            callback({quantity:amountOfTicketes})
            console.log('cantidad de ticketes', ticketTail);
        })

        socket.on('takeTicket',(data,callback)=>{
            const customer =ticketTail[0]
            callback({customer:customer})
            ticketTail.splice(0,1)

            io.emit('updateQuantityTickets',{
                quantity:ticketTail.length
            })

            io.to(customer.id).emit('alertCustomerShift',{
                message:`Eres el siguiente por favor dirigite a la caja ${data.box}`
            })

            io.emit('mainScreen',{
                ticketTail:ticketTail
            })
        })

        // Manejar errores
        socket.on("error", (error) => {
            console.error("❌ Error en el socket:", error);
        });
    });
}
