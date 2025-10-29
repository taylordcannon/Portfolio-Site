<template>
    <section
        class="flex flex-col items-center justify-center text-center min-h-[70vh] sm:min-h-[80vh] px-4 py-8 sm:py-12">
        <!-- Hero text -->
        <p class="text-xl sm:text-2xl md:text-3xl leading-relaxed max-w-[90%] sm:max-w-2xl">
            Hello, my name is
            <span class="text-mint font-bold">Taylor Cannon</span>.
            <br />
            <span class="text-gray-400 text-base sm:text-lg md:text-xl block mt-2">
                Full Stack Software Developer
            </span>
        </p>

        <!-- Buttons row -->
        <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-10 md:mt-12">
            <!-- Resume -->
            <a href="/assets/pdfs/taylor_cannon_resume_07_09_2025.pdf" download class="w-full md:w-auto">
                <button
                    class="min-w-[150px] flex items-center justify-center border border-mint text-mint px-6 py-3 rounded hover:bg-mint hover:text-darkBg transition-all duration-300 text-sm md:text-base font-medium">
                    Download Resume
                </button>
            </a>

            <!-- GitHub -->
            <a href="https://github.com/taylordcannon" target="_blank" aria-label="GitHub" class="group">
                <button
                    class="flex items-center justify-center border border-mint rounded px-3 py-3 hover:bg-mint transition-all duration-300">
                    <img src="/src/assets/images/icon_github_white.svg" alt="GitHub"
                        class="h-6 w-6 transition-all duration-300" />
                </button>
            </a>

            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/taylordcannon/" target="_blank" aria-label="LinkedIn" class="group">
                <button
                    class="flex items-center justify-center border border-mint rounded px-3 py-3 hover:bg-mint transition-all duration-300">
                    <img src="/src/assets/images/icon_linkedin_white.svg" alt="LinkedIn"
                        class="h-6 w-6 transition-all duration-300" />
                </button>
            </a>
        </div>
    </section>
</template>

<style scoped>
    /* --- ICON COLORS --- */
    button img {
        /* Mint filter for white icons (#1db256) */
        filter: invert(61%) sepia(74%) saturate(502%) hue-rotate(90deg) brightness(95%) contrast(92%);
        transition: filter 0.3s ease-in-out;
    }

    button:hover img {
        /* Tailwind darkBg (#232323ff) */
        filter: brightness(0) saturate(100%) invert(8%) sepia(5%) saturate(161%) hue-rotate(314deg) brightness(99%) contrast(94%);
    }
</style>