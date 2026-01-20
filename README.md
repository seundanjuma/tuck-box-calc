# tuck end box calculator

a simple calculator for tuck end box packaging design dimensions.

## why i built this

i was working on a packaging design project that needed 23 individual skus. each sku had different box dimensions, and i had to calculate all the panel measurements for each one. doing this manually was taking forever, so i built this app to speed things up. now i just input the box dimensions and get all the panel measurements instantly.

## what it does

this app calculates all the panel dimensions for a tuck end box based on three inputs:
- width
- length  
- height

![box layout diagram](public/images/box-layout.png)

it gives you measurements for:
- bottom panel
- left and right side panels (with glue flaps and interior tuck flaps)
- front and back panels (with dust flaps)
- top panel (with side flaps)
- front flap (with dust flaps)

you can click any dimension to copy it to your clipboard.

## how to use

1. enter your box dimensions in inches
2. all panel measurements calculate automatically
3. click any measurement to copy it

## technical stuff

built with:
- react
- lucide-react (for icons)

the app uses a standard 0.0787" (2mm) allowance for glue flaps and tolerances.

## setup

```bash
npm install
npm start
```

## deploy to vercel

1. push your code to github
2. connect your repo to vercel
3. deploy

that's it!

## note

tuck-in holes are constant at 1" × 0.0787" - you'll need to add those manually to your design.