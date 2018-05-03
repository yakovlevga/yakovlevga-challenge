import * as React from 'react'

export const GravatarImage = (props: any) => (
    <div>
        <img src={`https://www.gravatar.com/avatar/${props.name.split('').map((x: string) => x.charCodeAt(0)).join('')}?d=${props.set}&f=y`} />
    </div>
)