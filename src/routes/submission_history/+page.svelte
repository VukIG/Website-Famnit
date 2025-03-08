<script lang="ts">
    import { username } from '$lib/auth.ts';
    import { submissions } from '$lib/stores.ts'; // Import the store
    import { derived } from 'svelte/store';
  
    const userSubmissions = derived([submissions, username], ([$submissions, $username]) => {
      return $submissions.filter((submission) => submission.username === $username);
    });
  </script>
  
  <div class="min-h-screen bg-[#191919] text-white p-8">
    <h1 class="text-3xl font-bold mb-6">Submission History</h1>
    <p class="mb-6">Below are the forms you have submitted:</p>
  
    {#if $userSubmissions.length === 0}
      <p class="text-gray-500">No submissions found for your account.</p>
    {:else}
      <div class="space-y-4">
        {#each $userSubmissions as submission}
          <div class="bg-[#222222] p-4 rounded-lg shadow-md">
            <h2 class="text-xl font-semibold">{submission.formName}</h2>
            <h3 class="text-gray-100 mt-2"><span class="text-gray-100 font-bold text-[#FBBF2D]">Topic:</span> {submission.selectedOption}</h3>
            <p class="text-gray-300 mt-2"> <span class="text-gray-100 font-bold text-[#FBBF2D]">Description:</span> {submission.description}</p>
          </div>
        {/each}
      </div>
    {/if}
  </div>