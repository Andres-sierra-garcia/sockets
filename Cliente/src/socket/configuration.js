import {io} from 'socket.io-client'
const user = localStorage.getItem('name')
const socket = io('http://localhost:3999',{
    autoConnect:false,
    reconnectionAttempts:3,
    reconnectionDelay:1000,
    transports:['websocket']
});

socket.on('connect',()=>{
    console.log('conectado al servidor con ID: ', socket.id);
})

socket.on('disconnect',()=>{
    console.log('desconectado 🔴');
})

export function sendData (data){
    socket.emit('sendMessage',{
        user,
        data
    })
}

export function receiveDate (){
    socket.on('receiveData',(data)=>{
        console.log('datos recibidos', data);
        return data
    })
}

export default socket