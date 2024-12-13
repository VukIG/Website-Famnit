<script lang="ts">
	import '../app.css';
</script>

<div class="min-h-screen flex flex-col bg-[#191919] text-white">
	<!-- Header -->
	<header class="flex flex-wrap justify-between items-center px-8 py-4 border-gray-700 z-10">
		<div class="flex items-center">
			<img src="https://www.figma.com/file/RDs6JgXX9XYMiMxdSlw6ZA/image/9ab520859b4a631f114a43bd17c85d2c5f43e9c6" alt="Student Council Logo" class="h-10 w-10 mr-4">
			<span class="font-bold text-lg">Student Council</span>
		</div>
		<nav class="flex items-center gap-6">
			<div class="relative">
				<input 
					type="text" 
					placeholder="Search" 
					class="px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none"
				/>
			</div>
			<a href="/faq" class="font-semibold text-sm hover:text-gray-300">FAQ</a>
		</nav>
		<div class="flex items-center gap-5">
			<button id="language" class="font-medium border rounded-lg px-3 py-1 text-center">EN</button>
			<span id="name" class="font-semibold">Name Surname</span>
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
