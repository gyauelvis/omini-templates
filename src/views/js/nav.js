document.addEventListener('DOMContentLoaded', function () {
    const sidebarCollapseButton = document.getElementById('collapse-sidebar');
    const sidebar = document.querySelector('aside');
    const mainContent = document.querySelector('main');
    const companyInfo = document.getElementById('company-info');
    const menuItem = document.querySelectorAll('.menu-item');
    let isToggled = false;

    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };

    const toggleSidebar = () => {
        sidebarCollapseButton.disabled = true;

        if (!isToggled) {
            sidebarCollapseButton.classList.add('rotate-180');
            companyInfo.classList.replace('border', 'border-0');
            sidebar.classList.replace('w-72', 'w-16');
            mainContent.classList.replace('md:ml-72', 'md:ml-16');

            document.querySelectorAll('.display-none-toggled').forEach(elem => {
                elem.classList.replace('flex', 'hidden');
            });
            document.querySelectorAll('.display-hide-toggle').forEach(elem => {
                elem.classList.replace('block', 'invisible');
            });

            document.querySelectorAll('.logout-item').forEach(elem => {
                elem.classList.replace('block', 'hidden');
            });
            document.querySelector('#logout-section').classList.replace('border', 'border-0');
        } else {
            sidebarCollapseButton.classList.remove('rotate-180');
            companyInfo.classList.replace('border-0', 'border');
            sidebar.classList.replace('w-16', 'w-72');
            mainContent.classList.replace('md:ml-16', 'md:ml-72');

            document.querySelector('#logout-section').classList.replace('border-0', 'border');

            document.querySelectorAll('.logout-item').forEach(elem => {
                elem.classList.replace('hidden', 'block');
            });


            document.querySelectorAll('.display-hide-toggle').forEach(elem => {
                elem.classList.replace('invisible', 'block');
            });
            document.querySelectorAll('.display-none-toggled').forEach(elem => {
                elem.classList.replace('hidden', 'flex');
            });
        }

        isToggled = !isToggled;

        setTimeout(() => {
            sidebarCollapseButton.disabled = false;
        }, 300);
    };

    sidebarCollapseButton.addEventListener('click', debounce(toggleSidebar, 100));


    sidebarCollapseButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleSidebar();
        }
    });

    menuItem.forEach(item => {
        item.addEventListener('hover', () => {
            if (isToggled) {
                item.nextSibling.classList.replace('opacity-0', 'opacity-1');
            }
        });
    });
});
