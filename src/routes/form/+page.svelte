<script>
    const buttons = [
    "Studying issues",
    "Financial support",
    "Non-financial support",
    "Feedback",
    "Financing students' projects"
  ];
</script>
<div class="w-[100vw] h-[100vh] bg-[#191919]">
    <div class="space-y-4 flex justify-center aling-center gap-5 pt-10 rounded-xl">
      {#each buttons as button}
        <button class="w-[13em] rounded-3xl h-[3em] bg-white z-10">
          {button}
        </button>
      {/each}
    </div>
  
    <h1 class="text-[#8B8B8B] text-[200px] w-[100vw] absolute bottom-[180px] left-[-20px] z-0">CHOOSE</h1>
    <h1 class="text-[#8B8B8B] text-[200px] w-[100vw] absolute bottom-0 left-[-20px] z-0">THE FORM</h1>
  </div>