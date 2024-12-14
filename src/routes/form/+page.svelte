<script lang="ts">
  // Define the button array and its initial state
  interface ButtonState {
    label: string;
    formId: string; // Identifier for the form
  }

  let buttons: ButtonState[] = [
    { label: "Studying issues", formId: "studyIssues" },
    { label: "Financial support", formId: "financialSupport" },
    { label: "Non-financial support", formId: "nonFinancialSupport" },
    { label: "Feedback", formId: "feedback" },
    { label: "Financing students' projects", formId: "studentProjects" }
  ];

  let selectedForm: string | null = null; // Tracks the currently selected form

  function handleButtonClick(formId: string): void {
    selectedForm = selectedForm === formId ? null : formId; // Toggle the form
  }
</script>

<div class="w-[100vw] h-[100vh] bg-[#191919] flex flex-col items-center">
  <div class="flex justify-center gap-5 pt-20 rounded-xl">
    {#each buttons as button}
      <button
        on:click={() => handleButtonClick(button.formId)}
        class="w-[13em] rounded-3xl h-[3em] text-black z-10"
        style="background-color: {selectedForm === button.formId ? '#004AAC' : '#FFFFFF'}; color: {selectedForm === button.formId ? 'white' : 'black'}"
      >
        {button.label}
      </button>
    {/each}
  </div>


  {#if !selectedForm}
    <div class="mt-20">
      <h1 class="text-[#8B8B8B] text-[200px] w-[100vw] absolute bottom-[180px] left-[-20px] z-0">CHOOSE</h1>
      <h1 class="text-[#8B8B8B] text-[200px] w-[100vw] absolute bottom-0 left-[-20px] z-0">THE FORM</h1>
    </div>
  {/if}


  {#if selectedForm}
    <div class="w-[70%] h-[50%] bg-[#191919] border border-gray-200 p-10 rounded-3xl mt-10">
      {#if selectedForm === "studyIssues"}
        <form>
          <h2 class="text-white text-2xl">Form for Studying Issues</h2>
          <label>
            Choose Type:
            <select class="w-1/4 p-2 mb-3 mt-3 bg-[#191919] border border-gray-600 rounded-full text-white">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </label>
          <br>
          <label>
            Brief Description:
            <br>
            <input
              type="text"
              placeholder="Enter description..."
              class="w-full p-2 bg-[#191919] mt-3 mb-3 border border-gray-600 rounded-full text-white"
            />
          </label>
          <button type="submit" class="bg-[#004AAC] text-white font-semibold py-2 px-4 mt-5 rounded float-right">
            Submit
          </button>
        </form>
      {/if}
      {#if selectedForm === "financialSupport"}
        <form>
          <h2 class="text-white text-2xl">Form for Financial Support</h2>
          <label>
            Choose Type:
            <select class="w-1/4 p-2 mb-3 mt-3 bg-[#191919] border border-gray-600 rounded-full text-white">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </label>
          <br>
          <label>
            Brief Description:
            <br>
            <input
              type="text"
              placeholder="Enter description..."
              class="w-full p-2 bg-[#191919] mt-3 mb-3 border border-gray-600 rounded-full text-white"
            />
          </label>
          <button type="submit" class="bg-[#004AAC] text-white font-semibold py-2 px-4 mt-5 rounded float-right">
            Submit
          </button>
        </form>
      {/if}
      {#if selectedForm === "nonFinancialSupport"}
        <form>
          <h2 class="text-white text-2xl">Form for Non-Financial Support</h2>
          <label>
            Choose Type:
            <select class="w-1/4 p-2 mb-3 mt-3 bg-[#191919] border border-gray-600 rounded-full text-white">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </label>
          <br>
          <label>
            Brief Description:
            <br>
            <input
              type="text"
              placeholder="Enter description..."
              class="w-full p-2 bg-[#191919] mt-3 mb-3 border border-gray-600 rounded-full text-white"
            />
          </label>
          <button type="submit" class="bg-[#004AAC] text-white font-semibold py-2 px-4 mt-5 rounded float-right">
            Submit
          </button>
        </form>
      {/if}
      {#if selectedForm === "feedback"}
        <form>
          <h2 class="text-white text-2xl">Feedback Form</h2>
          <label>
            Choose Type:
            <select class="w-1/4 p-2 mb-3 mt-3 bg-[#191919] border border-gray-600 rounded-full text-white">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </label>
          <br>
          <label>
            Brief Description:
            <br>
            <input
              type="text"
              placeholder="Enter description..."
              class="w-full p-2 bg-[#191919] mt-3 mb-3 border border-gray-600 rounded-full text-white"
            />
          </label>
          <button type="submit" class="bg-[#004AAC] text-white font-semibold py-2 px-4 mt-5 rounded float-right">
            Submit
          </button>
        </form>
      {/if}
      {#if selectedForm === "studentProjects"}
        <form>
          <h2 class="text-white text-2xl">Form for Financing Students' Projects</h2>
          <label>
            Choose Type:
            <select class="w-1/4 p-2 mb-3 mt-3 bg-[#191919] border border-gray-600 rounded-full text-white">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </label>
          <br>
          <label>
            Brief Description:
            <br>
            <input
              type="text"
              placeholder="Enter description..."
              class="w-full p-2 bg-[#191919] mt-3 mb-3 border border-gray-600 rounded-full text-white"
            />
          </label>
          <button type="submit" class="bg-[#004AAC] text-white font-semibold py-2 px-4 mt-5 rounded float-right">
            Submit
          </button>
        </form>
      {/if}
    </div>
  {/if}
</div>
