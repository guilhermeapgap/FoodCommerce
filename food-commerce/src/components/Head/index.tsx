interface HeadProps {
    title: string;
    description?: string
}

export function Head({title, description = ''}: HeadProps){
    document.title = `Food Commerce | ${title}`
    document.querySelector('[name=desccription]')?.setAttribute('content', description)

    return null
}