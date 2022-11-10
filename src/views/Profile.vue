<template>
    <nav>
        <button class="bg-yellow-100 m-2 p-2 rounded-lg hover:bg-emerald-100">
            <RouterLink to ="/">HOMEHOMEHOME</RouterLink>
        </button> 
    </nav>
    <body class="bg-pink-100">
        <span class=" box-decoration-slice bg-indigo-200 m-1 p-1 rounded-md text-grey-500 text-2xl font-bold">
        B.hannujayaP.hattananN.ichakan
        <font-awesome-icon icon="fa-solid fa-users-rays"/>
        </span>
        <div class="flex flex-row mx auto shadow-md rounded box-content p-10 border-2 border-yellow-200 transition duration-300 hover: bg-red-200">
            <profilecard class="text-blue-300 w-1/3" v-for="member in members" :key="member.id" 
                :name="member.name"
                :nickname="member.nickname"
                :birthday="member.birthday"
                :content="member.content"
                :image="member.image">
            </profilecard>
        </div>
    </body>


</template>
    
<script>
import profilecard from "../components/Profile.vue";
export default {
    data()
    {
        return {
            members: [
            {
                name: "Bhanujaya",
                nickname: "Cream",
                birthday: "8 January 2004",
                content: "Ku82",
                image: "/assets//images/cream.jpg",
            },
            {
                name: "Phattanan",
                nickname: "Mind",
                birthday: "5 July 2004",
                content: "Ku82",
                image: "/assets/images/mind.jpeg",
            },
            {
                name: "Nichakan",
                nickname: "Pleang",
                birthday: "7 March 2004",
                content: "Ku82",
                image: "/assets/images/pleang.jpg",
            }
            ]
        }
    },   
    components: {
        profilecard,
    }, 
};              
</script>
