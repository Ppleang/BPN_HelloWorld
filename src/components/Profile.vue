<style>
@import url('https://fonts.googleapis.com/css2?family=Calistoga&family=Concert+One&family=Mali:wght@300&display=swap');
</style>
<template>
    <div>
        <profilecard></profilecard>
    </div>
    <body >
        <div class="bg-blue-100 shadow-md rounded box-content w-full h-90  border-4 transtion duration-200 ease-in-out hovert:bg-blue-200">
            <div class="text-xl text-black h-90  bg-pink-300 font-semibold m-2 p-2 rounded-md text-center hover:bg-purple-200 font-Calistoga" >"Hello Profile"
                <div class="rounded-full w-32 h-32 bg-cover object-center mx-auto" :style="getUrlImage(image)"></div>
                <div class="text-sky-700 font-bold font-mono text-center">{{name}}</div>
                <div class="text-sky-700 font-medium font-mono text-center">{{nickname}}</div>
                <div class="text-sky-700 font-medium font-mono text-center">{{birthday}}</div>
                <div class="text-sky-700 font-medium font-mono text-center">{{content}}</div>
    
            </div>
            <!--<img src="../assets/images/pleang.jpg"  alt="" class="rounded-full w-40 object-center mx-auto">-->
        </div>
    </body>

</template>
<script>
    export default {
        props: {
        name: {
            type: String,
            default: "Phattanan",
        },
        nickname: {
            type: String,
            default: "Mind",            
        },
        birthday: {
            type: String,
            default: "5 July 2004",            
        },
        content: {
            type: String,
            default: "Ku82", 
        },
        image: {
            type: String,
            default: "/assets/images/pleang.jpg", 
        },
    }, 
    methods: 
    {
        getUrlImage(imagePath)
        {
            return {'background-image' : 'url("./src/'+imagePath+'")'};
        },
    }          
}; 

</script>
<style>

</style>