<template>
    <div>
        home page
    </div>
</template>
<script setup> 
 
import { logged } from '~/store/logged'; 

const router = useRouter()
if(!logged.value){ 
        router.push('/auth/register')
}
 
onMounted(() => {
    if(logged.value ){alert('logged in')}
})
</script>