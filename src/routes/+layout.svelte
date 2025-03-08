<script lang="ts">
	import '../app.css'
	import { loginStatus, username } from '$lib/auth.ts';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	let status = false;

  // Subscribe to loginStatus store to reflect the login state
  loginStatus.subscribe(value => {
    status = value;
  });

  onMount(() => {
    if (browser && $loginStatus && window.location.pathname === '/') {
      goto('/home');
    }
  });

</script>
  

<div class="min-h-screen flex flex-col bg-[#191919] text-white">
	<!-- Header -->
	<header class="flex flex-wrap justify-between items-center px-8 py-4 border-gray-700 z-10">
		<div class="flex items-center">
			<img src="https://www.figma.com/file/RDs6JgXX9XYMiMxdSlw6ZA/image/9ab520859b4a631f114a43bd17c85d2c5f43e9c6" alt="Student Council Logo" class="h-10 w-10 mr-4">
			<span class="font-bold text-lg">Student Council</span>
		</div>
		<nav class="flex items-center gap-6">	
			{#if $loginStatus}
				<div class="flex justify-center items-center w-full">
					<button class="px-4 py-2 text-white rounded-full hover:scale-110 transition-transform duration-300"><a href="/home">Home</a></button>
					<button class="px-4 py-2 text-white rounded-full hover:scale-110 transition-transform duration-300"><a href="/form">Forms</a></button>
					<button class="px-4 py-2 text-white rounded-full hover:scale-110 transition-transform duration-300"><a href="/submission_history">Submission History</a></button>
				</div>
			{/if}
		</nav>
		<div class="flex items-center gap-5">
			<button id="language" class="font-medium border rounded-lg px-3 py-1 text-center">EN</button>
			<!-- {#if $loginStatus} -->
			  <p id="user-info" class="text-white">{$username}</p>
			<!-- {/if} -->
		  </div>
	</header>

	<!-- Content -->
	<main class="flex-grow">
		<slot />
	</main>

	<!-- Footer -->
	<footer class="text-sm text-gray-500 px-4 py-4 sm:text-right">
		<span>Student Council © {new Date().getFullYear()}</span>
	</footer>
</div>
