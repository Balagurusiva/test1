<script setup>
	import { logged } from "~/store/logged";
	const router = useRouter();
	const user_login = ref({
		email: "",
		password: "",
	});

	const handleLogin = async () => {
        console.log("cliked")
		const axios = useNuxtApp().$axios;
        
	 
			const res = await axios.post(
				'/api/login',
				{
					email: user_login.value.email,
					password: user_login.value.password,
				}
			);

			if (res.data === "login successfull") {
				logged.value = true;
				router.push("/");
			} else {
				alert("invalid argument");
			}
		};

</script>

<template>
	<div class="flex flex-col md:flex-row bg-red">
		<div class="hidden md:flex w-[50%] img-contaier">
			<img
				src="/public/blue-white-leafy-background-vector_53876-136080 1.png"
				alt=""
				class="w-[100%] h-[100vh]"
			/>
		</div>
		<div class="register-form w-full md:p-[35px]">
			<p class="text-[18px] font-semibold text-gray-500 my-[30px]">
				<span class="text-[40px] font-bold text-[#7A999C]">Hello,</span>guys
			</p>

			<div class="flex flex-col justify-between gap-[30px] w-full items-center">
				<p class="text-center text-[30px] text-[#7A999C] underline mb-[20px]">
					Login
				</p>

				<div class="input-contair w-full px-5 md:w-[70%]">
					<div class="border-b-2 border-[#7a999c] bg-red mb-[30px]">
						<input
							type="email"
							class="outline-0 p-[10px] text-[20px] w-full"
							placeholder="Enter email"
							v-model="user_login.email"
						/>
					</div>
					<div class="border-b-2 border-[#7a999c] bg-red mb-[30px]">
						<input
							type="password"
							class="outline-0 p-[10px] text-[20px] w-full"
							placeholder="Enter password"
							v-model="user_login.password"
						/>
					</div>
				</div>

				<div class="flex justify-end px-[35px]" @click="handleLogin">
					<p
						class="flex items-center justify-center cursor-pointer rounded-[10px] font-bold text-white mt-[20px] h-[40px] w-[100px] bg-[#7a999c]"
					>
						Sign-up
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
