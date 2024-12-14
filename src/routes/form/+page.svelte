<script lang="ts">
  // Define the button array and its initial state
  interface ButtonState {
    label: string;
    isClicked: boolean;
  }

  let buttons: ButtonState[] = [
    { label: "Studying issues", isClicked: false },
    { label: "Financial support", isClicked: false },
    { label: "Non-financial support", isClicked: false },
    { label: "Feedback", isClicked: false },
    { label: "Financing students' projects", isClicked: false }
  ];

  function handleButtonClick(index: number): void {
    buttons = buttons.map((button, i) => ({
      ...button,
      isClicked: i === index // Set isClicked true for the clicked button, false for others
    }));
  }
</script>

<div class="w-[100vw] h-[100vh] bg-[#191919]">

  <div class="space-y-4 flex justify-center align-center gap-5 pt-10 rounded-xl">
    {#each buttons as button, i}
      <button
        on:click={() => handleButtonClick(i)}
        class="w-[13em] rounded-3xl h-[3em] mt-4 text-black z-10 bg-white"
        style="background-color: {button.isClicked ? '#0543FF' : '#FFFFFF'}; color: {button.isClicked ? 'white' : 'black'}"
      >
      {button.label}
      </button>
    {/each}
  </div>

  <h1 class="text-[#8B8B8B] text-[200px] w-[100vw] absolute bottom-[180px] left-[-20px] z-0">CHOOSE</h1>
  <h1 class="text-[#8B8B8B] text-[200px] w-[100vw] absolute bottom-0 left-[-20px] z-0">THE FORM</h1>
</div>
