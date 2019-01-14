# reference-tooltip-react-sample

Sample of [reference-tooltip](https://github.com/moriyuu/reference-tooltip) with React

## Example

[https://reference-tooltip-react-sample.netlify.com/](https://reference-tooltip-react-sample.netlify.com/)

```jsx
import React from "react";
import "reference-tooltip";

function Component() {
    return (
        <p>
            I love <referenced-word rwid="sushi" content="Very very delicious.">sushi</referenced-word>.
        </p>
    );
}
```

## Try in local

```bash
yarn dev
# or
npm run dev
```
