<script lang="ts">
  import { get } from "svelte/store";
  import { username } from "$lib/auth.ts";
  import { submissions } from '$lib/stores.ts';

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
  const formMap = new Map<string, { title: string; description: string; fields: FormField[] }>([
    [
      "Issues",
      {
        title: "Form for Issues",
        description: "On this form, you can submit a request regarding problems on campus, with a professor/subject or administrative issues",
        fields: [
          { id: "studyType", label: "Choose Type:", type: "select", options: ["Issues on the campus", "Issues with professor / subject", "Issues with the faculty", "Other"] },
          { id: "studyDescription", label: "Description:", type: "text", placeholder: "Enter description..." }
        ]
      }
    ],
    [
      "feedback",
      {
        title: "Feedback Form",
        description: "On this form, you can submit you opinion about the last event, or the work of teh Student Council of FAMNIT",
        fields: [
          { id: "feedbackType", label: "Choose Type:", type: "select", options: ["Feedback on event", "Student Council Work"] },
          { id: "feedbackDescription", label: "Description:", type: "text", placeholder: "Enter description..." }
        ]
      }
    ],
    [
      "requests",
      {
        title: "Form for Student Requests",
        description: "On this form, you can either apply for the Open Call, or suggest any idea you have",
        fields: [
          { id: "projectType", label: "Choose Type:", type: "select", options: ["Apply for the Open Call", "Idea for an Event", "Random Idea"] },
          { id: "projectDescription", label: "Description:", type: "text", placeholder: "Enter description..." }
        ]
      }
    ]
  ]);

  let buttons: ButtonState[] = [
    { label: "Issues", formId: "Issues" },
    { label: "Feedback", formId: "feedback" },
    { label: "Request", formId: "requests" }
  ];

  let FormData: { [key: string]: any } = {};

  let selectedForm: string | null = null; // Tracks the currently selected form

  function handleButtonClick(formId: string): void {
    selectedForm = selectedForm === formId ? null : formId; // Toggle the form
  }

  // Used for testing purposes!!!
  // TODO: implement real logic of submitting the form (probably to the backend)
  function submitForm() {
    if (!selectedForm) return;

    const formName = buttons.find((btn) => btn.formId === selectedForm)?.label || selectedForm;
    const textField = formMap.get(selectedForm)?.fields.find((f) => f.type === "text");
    const description = textField && textField.id ? FormData[textField.id] || 'No description' : 'No description';
    const selectField: FormField | undefined = formMap.get(selectedForm)?.fields.find((f) => f.type === "select");
    const selectedOption = selectField && selectField.id ? FormData[selectField.id] || 'No option selected' : 'No option selected';

    submissions.update((current) => [
      ...current,
      { username: $username || 'anonymous', formName, description, selectedOption }
    ]);

    console.log("Submitting form:", selectedForm);
    console.log("Form data:", FormData);

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
      <div class="w-[70%] h-auto bg-[#191919] border border-gray-200 p-10 rounded-3xl mt-10 flex flex-col justify-between">
        <form>
          <h2 class="text-white text-2xl">{formMap.get(selectedForm)?.title}</h2>
          <br />
          <p class="text-white text-xl">{formMap.get(selectedForm)?.description}</p>
          <br />
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
              <br />
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
        </form>
        <div class="flex justify-end">
          <button
            type="button"
            class="bg-[#004AAC] text-white font-semibold py-2 px-4 mt-5 rounded"
            on:click={submitForm}
          >
            Submit
          </button>
        </div>
      </div>
    {/if}
  {/if}
</div>