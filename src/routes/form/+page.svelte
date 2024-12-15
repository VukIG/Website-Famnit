<script lang="ts">
  // Define the button array
  interface ButtonState {
    label: string;
    formId: string; // Identifier for the form
  }

  interface FormField {
    id: string; // Identifier for the field
    label: string;
    type: string; // "select" or "text"
    options?: string[]; // For select fields
    placeholder?: string; // For text input fields
  }

  // Create a Map for form configurations
  const formMap = new Map<string, { title: string; fields: FormField[] }>([
    [
      "studyIssues",
      {
        title: "Form for Studying Issues",
        fields: [
          { id: "studyType", label: "Choose Type:", type: "select", options: ["Option 1", "Option 2", "Option 3", "Option 4"] },
          { id: "studyDescription" ,label: "Brief Description:", type: "text", placeholder: "Enter description..." }
        ]
      }
    ],
    [
      "financialSupport",
      {
        title: "Form for Financial Support",
        fields: [
          {id: "financialType" ,label: "Choose Type:", type: "select", options: ["Option 1", "Option 2", "Option 3", "Option 4"] },
          {id: "financialDescription" ,label: "Brief Description:", type: "text", placeholder: "Enter description..." }
        ]
      }
    ],
    [
      "nonFinancialSupport",
      {
        title: "Form for Non-Financial Support",
        fields: [
          {id: "nonFinancialType" ,label: "Choose Type:", type: "select", options: ["Option 1", "Option 2", "Option 3", "Option 4"] },
          {id: "nonFinancialDescription" ,label: "Brief Description:", type: "text", placeholder: "Enter description..." }
        ]
      }
    ],
    [
      "feedback",
      {
        title: "Feedback Form",
        fields: [
          {id: "feedbackType" ,label: "Choose Type:", type: "select", options: ["Option 1", "Option 2", "Option 3", "Option 4"] },
          {id: "feedbackDescription" ,label: "Brief Description:", type: "text", placeholder: "Enter description..." }
        ]
      }
    ],
    [
      "studentProjects",
      {
        title: "Form for Financing Students' Projects",
        fields: [
          {id: "projectType" ,label: "Choose Type:", type: "select", options: ["Option 1", "Option 2", "Option 3", "Option 4"] },
          {id: "projectDescription" ,label: "Brief Description:", type: "text", placeholder: "Enter description..." }
        ]
      }
    ]
  ]);

  let buttons: ButtonState[] = [
    { label: "Studying issues", formId: "studyIssues" },
    { label: "Financial support", formId: "financialSupport" },
    { label: "Non-financial support", formId: "nonFinancialSupport" },
    { label: "Feedback", formId: "feedback" },
    { label: "Financing students' projects", formId: "studentProjects" }
  ];

  let FormData: { [key: string]: any } = {};

  let selectedForm: string | null = null; // Tracks the currently selected form

  function handleButtonClick(formId: string): void {
    selectedForm = selectedForm === formId ? null : formId; // Toggle the form
  }

  //Used for testing purposes!!!
  //TODO: implement real logic of submitting the form (probably to the backend)
  function submitForm() {
  if (!selectedForm) return;

  console.log("Submitting form:", selectedForm);
  console.log("Form data:", FormData);

  // Simulate clearing the formData after submission
  FormData = {};
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
    {#if formMap.has(selectedForm)}
      <div class="w-[70%] h-[50%] bg-[#191919] border border-gray-200 p-10 rounded-3xl mt-10">
        <form>
          <h2 class="text-white text-2xl">{formMap.get(selectedForm)?.title}</h2>
          {#each formMap.get(selectedForm)?.fields ?? [] as field}
            <label>
              {field.label}
              {#if field.type === "select"}
                <select
                  bind:value={FormData[field.id]} 
                  class="w-1/4 p-2 mb-3 mt-3 bg-[#191919] border border-gray-600 rounded-full text-white"
                >
                  {#each field.options ?? [] as option}
                    <option>{option}</option>
                  {/each}
                </select>
              {/if}
              <br>
              {#if field.type === "text"}
                <input
                  type="text"
                  bind:value={FormData[field.id]}
                  placeholder={field.placeholder}
                  class="w-full p-2 bg-[#191919] mt-3 mb-3 border border-gray-600 rounded-full text-white"
                />
              {/if}
            </label>
          {/each}
          <button
           type="button" 
           class="bg-[#004AAC] text-white font-semibold py-2 px-4 mt-5 rounded float-right"
           on:click={submitForm}
           >
            Submit
          </button>
        </form>
      </div>
    {/if}
  {/if}
</div>
