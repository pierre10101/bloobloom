<script setup lang="ts">
    import { useToggleStore } from '../../store/toggles';
    const store = useToggleStore();
    </script>
    <template>
        <section class="sidebar__section">
            <button class="sidebar__item" @click="store.toggleSidebarMenu(true, 'sidebarSubmenu', 'woman')">WOMAN</button>
            <button class="sidebar__item" @click="store.toggleSidebarMenu(true, 'sidebarSubmenu', 'men')">MEN</button>
            <button class="sidebar__item">HOME TRY ON</button>
            <button class="sidebar__item">FREE EYE TEST</button>
            <ul class="sidebar__item">
                <li>About us</li>
                <li>Pair for Pair</li>
                <li>Open Book</li>
                <li>Journal</li>
            </ul>
            <section class="sidebar__subsection">
                <button class="sidebar__item">LOGIN</button>
                <button class="sidebar__item">HELP</button>
            </section>
        </section>
    </template>
    <style scoped>
     .sidebar__section {
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        height:100%;
     }
    .sidebar__item {
        flex: 1 1 auto;
        background:none;
        border:none;
        border-bottom: 1px black solid;
        cursor:pointer;
        height: calc(100vh * 0.2);
        text-align:left;
    }
    
    .sidebar__section ul{
        flex: 2 1 auto;
        height: 100%;
        list-style-type: none;
        margin: 0;
        padding: 0;
        line-height: 300%;
    }
    .sidebar__section button:hover {
        color:white;
        background-color:black;
    }
    .sidebar__subsection {
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        height: calc(100vh * 0.2);
    }
    .sidebar__subsection .sidebar__item  {
        border-bottom:none;
        text-align:center;
        height: 100%;
    }
    .sidebar__subsection .sidebar__item:nth-child(1)  {
        border-right: 1px black solid;
    }
    
    </style>