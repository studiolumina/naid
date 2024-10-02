import { defineConfig } from 'unocss';
import { sizes } from './src/components/SectionSpacer.astro';

export default defineConfig({
    shortcuts: [{
        wrapper: 'w-100% max-w-[100vw] md:max-w-[calc(100vw-100px)] xl:max-w-[1120px] mx-auto',
        title: 'text-10 leading-[1.5] dark:c-gray-200',
        'project-title': 'text-8 leading-[1.1]',
        subtitle: 'text-6 c-gray-600 leading-[1.2] dark:c-gray-300',
        'subtitle-small': 'text-4 c-gray-600 leading-[1.3] dark:c-gray-300',
        small: 'text-xs c-gray-400 font-mono leading-[1.2] dark:c-gray-300',
        'project-list': 'grid grid-cols-[1fr_150px] md:grid-cols-[1fr_min-content_150px] lg:grid-cols-[1fr_min-content_min-content_150px] grid-auto-rows-[200px] items-stretch',
        'section--index': 'inline-grid border-b-1 md:border-l-1 md:border-r-0 border-r-1 border-gray-200 c-gray-500 dark-inside:border-gray-200 dark:border-gray-800 w-10 h-10 text-center place-content-center absolute top-0 left-0 md:translate-x-[-100%]',
        'section--source': 'c-gray-500 dark:c-gray-600 text-xs font-mono absolute top-[1rem] right-[1rem]',
        'investor--label': 'small pt-10 block pl-12.5 pb-3'
    }],
    variants: [
        (matcher) => {
            if (!matcher.startsWith('dark-inside:')) {
                return matcher;
            } else {
                console.log(matcher);
                return {
                    matcher: matcher.slice(12),
                    selector: (s) => `.dark-inside ${s}`
                }
            }
        }
    ]
});