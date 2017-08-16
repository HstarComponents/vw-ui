# vw-button

## Props

| Name | Data Type |  Two-way | Default Value | Description |
| --- | --- | --- | --- | --- |
| type | string | | 'default' | 按钮类型，可选 ['', 'default', 'warn', 'primary'] |
| disabled | boolean | | false | 是否禁用按钮，不可点击 |
| plain | boolean | | false | 是否是空心按钮（仅显示边框和文字）|
| mini | boolean | | false | 是否是小型按钮 |
| loading | boolean | | false | 是否处于加载状态（显示加载图标） |

## Slots

| Name | Description |
| --- | --- |
| default | 按钮文字 |


## Events

| Name | Paramters | Description |
| --- | --- | --- |
| click | MouseEvent | 点击按钮触发（处于disabled时，不会触发） |
