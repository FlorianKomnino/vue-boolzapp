console.log('Hello Universe!');

const { createApp } = Vue;

createApp ({
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
}).mount ('#app')
