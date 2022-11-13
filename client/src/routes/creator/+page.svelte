<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown'
    import { marked } from 'marked'

    let source = `![Test image](https://media.istockphoto.com/id/1288020112/vector/liquid-style-colorful-pastel-abstract-background-with-elements-vector.jpg?s=612x612&w=0&k=20&c=RVNXsYbufzsIJ2A5bGV4wWY9KJbErCj8DPCWQKOdfjs=)

# Title 1
## Sub Title
### Sub Sub title

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Arcu dui vivamus arcu felis bibendum. Id diam vel quam elementum pulvinar etiam. Quis blandit turpis cursus in hac. Eget egestas purus viverra accumsan in nisl. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Adipiscing enim eu turpis egestas. Cursus in hac habitasse platea dictumst quisque. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Bibendum at varius vel pharetra vel turpis nunc. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Cursus metus aliquam eleifend mi in.

<br />

### Sub Sub title
Viverra vitae congue eu consequat ac. Dui id ornare arcu odio ut. Tellus rutrum tellus pellentesque eu. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Varius vel pharetra vel turpis nunc eget lorem dolor. Duis at consectetur lorem donec. Non arcu risus quis varius quam quisque id diam. Blandit aliquam etiam erat velit scelerisque. Sed viverra ipsum nunc aliquet bibendum enim. Nibh tellus molestie nunc non blandit massa enim nec dui. Porttitor leo a diam sollicitudin tempor id eu nisl. Nulla pharetra diam sit amet nisl. Condimentum vitae sapien pellentesque habitant morbi tristique. Netus et malesuada fames ac. Bibendum enim facilisis gravida neque convallis a.

`;

    $: tokens = marked.parse(source)

    function handleChange(e: any) {
        source = e.target.value;
    }

    function handleParsed(event: any) {
        //access tokens via event.detail.tokens
        console.log(event.detail.tokens);
    }
</script>

<div class="flex fixed h-[50px] bottom-10 left-[110px] backdrop-blur-2xl z-[999]">
    <button class="mr-2 px-5 py-1 bg-zinc-800 text-white font-[600] flex items-center rounded-full group transition-all duration-300 active:scale-90">
        <svg class="transition-all duration-500 group-hover:scale-150" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0ZM2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11Zm9.61 1H4.39l-.25 1h7.72l-.25-1Z"/>
        </svg>
        <span class="ml-2 transition-all duration-500 group-hover:ml-3">
            Save Draft
        </span>
    </button>
    <button class="mx-1 px-5 py-1 bg-indigo-700 text-white font-[600] flex items-center rounded-full group transition-all duration-300 active:scale-90">
        <svg class="transition-all duration-500 group-hover:scale-150" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"/>
        </svg>
        <span class="ml-2 transition-all duration-500 group-hover:ml-3">
            Publish
        </span>
    </button>
</div>

<main class="grid grid-cols-2 w-[calc(100vw-200px)] left-[100px] max-h-[calc(100vh-140px)] overflow-auto absolute border border-gray-300">
    <div class="py-5 pr-10">
        <textarea bind:value={source} type="text" class="w-full h-full  bg-transparent ring-0 focus-0 border-0 outline-none pl-10" />
    </div>
    <div class="border-l border-gray-300 py-5 px-10">
        {@html tokens}
    </div>
</main>