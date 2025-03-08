<!-- src/routes/+page.svelte -->
<script lang="ts">
  import '../app.css';
  import { login } from '$lib/auth.ts';
  import { goto } from '$app/navigation';

  let showModal = false;
  let email = '';
  let usernameInput = ''; // Variable to hold username input

  function handleLoginClick() {
    showModal = true;
  }

  function handleSubmit() {
    showModal = false;
    login(usernameInput); // Pass username to login function
    goto('/home'); // Redirect to /home
  }
</script>

<div class="bg-white w-full h-full relative font-futura">
  <div class="relative z-0">
    <div
      class="absolute bg-black top-0 right-0 w-full h-full bg-right bg-no-repeat bg-50% transition-all duration-300"
      class:bg-blur={showModal}
      style="background-image: url('/SCLogo.png'); clip-path: polygon(0 0, 100% 100%, 100% 0);"
    ></div>

    <div
      class="w-[100vw] z-10 h-[100vh] bg-white border-l-[50vw] border-r-[50vw] border-b-[50vh] border-l-white border-b-white border-t-[50vh] transition-all duration-300"
      class:bg-blur={showModal}
    >
      <div class="absolute left-[10em] top-[19em] flex justify-center flex-col gap-7 z-10">
        <button
          on:click={handleLoginClick}
          id="log-in-button"
          class="flex justify-center align-middle w-[7em] p-5 bg-standardColor rounded-xl text-white text-5xl"
        >
          Log in
        </button>
        <p class="text-[#8B8B8B] pl-10">And become a part of the community</p>
      </div>
    </div>
  </div>

  {#if showModal}
    <div class="fixed inset-0 z-20 flex items-center justify-center">
      <div class="bg-[#181818] p-8 rounded-xl shadow-lg w-[24rem] space-y-6">
        <h2 class="text-2xl font-bold text-white">Log In</h2>
        <form on:submit|preventDefault={handleSubmit} class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-white-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              bind:value={email}
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-standardColor"
              required
            />
          </div>
          <div>
            <label for="username" class="block text-sm font-medium text-white-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              bind:value={usernameInput}
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-standardColor"
              required
            />
          </div>
          <div class="flex justify-end gap-4">
            <button
              type="button"
              on:click={() => (showModal = false)}
              class="px-4 py-2 text-white-700 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-standardColor text-white rounded-md hover:bg-opacity-90"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  {/if}
</div>

<style>
  .bg-blur {
    filter: blur(8px);
  }
</style>