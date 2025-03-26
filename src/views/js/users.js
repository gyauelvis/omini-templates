const toggleDropdownMenu = document.querySelector('#toggle-dropdown-menu');
const dropdowndMenuTemplate = `<div class="dropdown-menu absolute z-50 right-2 transition-[opacity,margin] duration opacity-100 min-w-52 bg-white shadow-md rounded-lg mt-2"
    role="menu" 
    aria-orientation="vertical"
    aria-labelledby="hs-dropdown-hover-event">
        <div class="p-1 space-y-0.5 text-omini-group-willow-grove">
            <a class="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                href="#">
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" width="24" height="24"
                    class="text-omini-group-willow-grove size-5"
                    fill="none">
                    <path
                        d="M14.0737 3.88545C14.8189 3.07808 15.1915 2.6744 15.5874 2.43893C16.5427 1.87076 17.7191 1.85309 18.6904 2.39232C19.0929 2.6158 19.4769 3.00812 20.245 3.79276C21.0131 4.5774 21.3972 4.96972 21.6159 5.38093C22.1438 6.37312 22.1265 7.57479 21.5703 8.5507C21.3398 8.95516 20.9446 9.33578 20.1543 10.097L10.7506 19.1543C9.25288 20.5969 8.504 21.3182 7.56806 21.6837C6.63212 22.0493 5.6032 22.0224 3.54536 21.9686L3.26538 21.9613C2.63891 21.9449 2.32567 21.9367 2.14359 21.73C1.9615 21.5234 1.98636 21.2043 2.03608 20.5662L2.06308 20.2197C2.20301 18.4235 2.27297 17.5255 2.62371 16.7182C2.97444 15.9109 3.57944 15.2555 4.78943 13.9445L14.0737 3.88545Z"
                        stroke="currentColor" stroke-width="1.5"
                        stroke-linejoin="round" />
                    <path d="M13 4L20 11" stroke="currentColor"
                        stroke-width="1.5" stroke-linejoin="round" />
                    <path d="M14 22L22 22" stroke="currentColor"
                        stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
                <span>Edit</span>
            </a>
            <a class="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                href="#">
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" width="24" height="24"
                    class="size-5" fill="none">
                    <path
                        d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z"
                        stroke="currentColor" stroke-width="1.5" />
                    <path
                        d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
                        stroke="currentColor" stroke-width="1.5" />
                </svg>
                Preview
            </a>
            <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                href="#">
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" width="24" height="24"
                    class="size-5 text-omini-cad-punch" fill="none">
                    <path
                        d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                        stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" />
                    <path
                        d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                        stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" />
                    <path d="M9.5 16.5L9.5 10.5" stroke="currentColor"
                        stroke-width="1.5" stroke-linecap="round" />
                    <path d="M14.5 16.5L14.5 10.5" stroke="currentColor"
                        stroke-width="1.5" stroke-linecap="round" />
                </svg>
                Delete
            </a>
        </div>
    </div>`;

toggleDropdownMenu.addEventListener('click', (e) => {
    e.preventDefault();
    const dropdownMenuParent = toggleDropdownMenu.parentElement;
    const existingDropdownMenu = dropdownMenuParent.querySelector('.dropdown-menu');

    if (!existingDropdownMenu) {
        // Insert the template as an HTML element instead of concatenating to innerHTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = dropdowndMenuTemplate.trim();
        dropdownMenuParent.appendChild(tempDiv.firstChild);
    } else {
        existingDropdownMenu.remove();
    }
});

document.body.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-menu') && !e.target.closest('#toggle-dropdown-menu')) {
        const existingDropdownMenu = document.querySelector('.dropdown-menu');
        if (existingDropdownMenu) {
            existingDropdownMenu.remove();
        }
    }
});