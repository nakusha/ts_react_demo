# Prepare React using Typescript
>npx create-react-app typescript-react-demo --typescript

# compile rule
> "noImplicitAny": false Any를 쓰는것이 허용됨(모든 변수에 형을 선언안해도됨)

# yarn add
> @types/를 붙이면 typescripts에서 이해할수 있는 것으로 설치됨
> ex) yarn add @types/styled-components

# typescript 장점
> prop-types를 이용하여 형태를 정의 안해줘도됨


# Error
> styled-compoenets가 안먹힘...
>> styeld-components를 설치하고 @types/styled-components를 설치해야됨(둘다되야 에러안남)