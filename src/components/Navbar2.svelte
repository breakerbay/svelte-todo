<nav>
    <div class="inner">
        <ul class="navbar-list">
            <li>
                <a class="menu-item" use:active={{className: 'selected'}} href="#/">Home</a>
            </li>
            <li>
                <a class="menu-item" use:active={{className: 'selected'}} href="#/images">Images</a>
            </li>
            <li>
                <a class="menu-item" use:active={{className: 'selected'}} href="#/login">Sign In</a>
            </li>
        </ul>
    </div>
</nav>

<script>
    import active from 'svelte-spa-router/active'
</script>

<!--
// List of navigation items
const navItems = [
{ label: "Home", href: "#" },
{ label: "logo", href: "#" },
{ label: "Projects", href: "#" },
{ label: "Project", href: "#" },
{ label: "Checklists", href: "#" },
{ label: "Worklots", href: "#" },
{ label: "Followup Actions", href: "#" },
{ label: "Images", href: "/#/images" },
{ label: "Sign Out", href: "#" },
{ label: "Sign In", href: "/#/login" }
];
        { label: "Sign In", href: "/#/login" }

body > nav > div > ul > li:nth-child(2) > a

body > nav > div > ul > li:nth-child(2) > a

-->
<!--

<style>
    nav {
        background-color: #2780e3;
        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        height: 45px;
    }

    .inner {
        max-width: 980px;
        padding-left: 20px;
        padding-right: 20px;
        margin: auto;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        height: 100%;
    }

    .mobile-icon {
        width: 25px;
        height: 14px;
        position: relative;
        cursor: pointer;
    }


    .mobile-icon:after,
    .mobile-icon:before,
    .middle-line {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #fff;
        transition: all 0.4s;
        transform-origin: center;
    }

    .mobile-icon:before,
    .middle-line {
        top: 0;
    }

    .mobile-icon:after,
    .middle-line {
        bottom: 0;
    }

    .mobile-icon:before {
        width: 66%;
    }

    .mobile-icon:after {
        width: 33%;
    }


    .middle-line {
        margin: auto;
    }

    .mobile-icon:hover:before,
    .mobile-icon:hover:after,
    .mobile-icon.active:before,
    .mobile-icon.active:after,
    .mobile-icon.active .middle-line {
        width: 100%;
    }

    .mobile-icon.active:before,
    .mobile-icon.active:after {
        top: 50%;
        transform: rotate(-45deg);
    }

    .mobile-icon.active .middle-line {
        transform: rotate(45deg);
    }

    .navbar-list {
        display: none;
        width: 100%;
        justify-content: space-between;
        margin: 0;
        padding: 0 40px;
    }


    .navbar-list.mobile {
        background-color: rgba(0, 0, 0, 0.8);
        position: fixed;
        display: block;
        height: calc(100% - 45px);
        bottom: 0;
        left: 0;
    }

    .navbar-list li {
        list-style-type: none;
        position: relative;
    }

    .navbar-list li:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #424245;
    }

    .navbar-list a {
        color: #fff;
        text-decoration: none;
        display: flex;
        height: 45px;
        align-items: center;
        padding: 0 10px;
        font-size: 13px;
    }

    .navbar-list a:hover {
        background-color: #1967be;
    }

    .navbar-list a.selected {
        background-color: red;
    }

    .navbar-list li a.selected {
        background-color: red;
    }

    a:active.selected {
        background-color: red;
    }

    .selected {
        background-color: red;
    }

    menu-item {
        color: yellow;
    }

    @media only screen and (min-width: 767px) {
        .mobile-icon {
            display: none;
        }

        .navbar-list {
            display: flex;
            padding: 0;
        }

        .navbar-list a {
            display: inline-flex;
        }
    }
</style>
-->
