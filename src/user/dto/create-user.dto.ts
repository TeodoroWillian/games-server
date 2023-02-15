import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString, Matches, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: "Nome do usuário",
    example:"Jonas"
  })
  name: string;
  @IsString()
  @ApiProperty({
    description:"E-mail do usuário para login.",
    example:"jonas@gmail.com"
  })
  email: string;
  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: "Senha muito fraca"
  })
  @ApiProperty({
    description:"Senha do Usuário para login",
    example:"Abcd@1234"
  })
  password: string;
  @ApiProperty({
    description:"A confirmação da senha de ser igual a senha",
    example:"Abcd@1234"
  })
  confirmPassword: string;

  @Matches(/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/,{
    message:"CPF inválido"
  })
  cpf: number;

  @IsBoolean()
  isAdmin: boolean;
}
