package Testes;

import java.util.Scanner;

public class Desafio ｛

   public static void main(String[] args) {

       Scanner numero = new Scanner(System.in);

       System.out.println("Digite um número por favor: ");

       //Digamos que o valor é 123

       int valor = numero.nextInt();

       int resto=0;        

       resto=valor%10; //resto=3

       valor=valor/10;// valor=12

       System.out.print(resto); //imprime 3

       resto=valor%10; //resto=2

       valor=valor/10;// valor=1

       System.out.print(resto); //imprime 2      

       System.out.print(valor); //imprime 1        

   ｝

}