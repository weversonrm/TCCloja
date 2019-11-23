<template>
    <div id="app">
        <v-app id="inspire" light>
            <v-navigation-drawer clipped fixed v-model="drawer" app>
                <v-list dense>
                    <v-list-tile @click to="/calçados">
                        <v-list-tile-action>
                            <v-icon>spa</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content to="/calçados">
                            <v-list-tile-title>Calçados</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click to="/acessorios">
                        <v-list-tile-action>
                            <v-icon>watch</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content to="/acessorios">
                            <v-list-tile-title>Acessorios</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile> 
                    <v-list-tile @click to="/roupas">
                        <v-list-tile-action>
                            <v-icon>whatshot</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content to="/roupas">
                            <v-list-tile-title>Roupas</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>                                    
                </v-list>
            </v-navigation-drawer>
            <v-toolbar app fixed clipped-left>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title class="flex display-1 font-weight-light">
                  Sunset
                </v-toolbar-title>
                    <v-spacer></v-spacer>
                  <v-toolbar-items class="hidden-sm-and-down">
                    <v-dialog v-model="dialog" width="600px">
                      <template v-slot:activator="{ on }">
                        <v-btn dark v-on="on" icon>
                          <v-icon color="grey lighten-1">pets</v-icon>
                         </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="headline">Moda consciente e ecológica</span>
                        </v-card-title>
                        <v-card-text>
                          <strong>01.Introdução: </strong><br>
                            Diante do tema veganismo, cogita-se que é de suma importância para a humanidade. E vai além de um hábito de alimentação e abundância para o corpo humano, o veganismo em si, é um conjunto de valores e práticas que buscam afastam sobre qualquer tipo de exploração aos animais, percebendo que a maioria dos produtos são derivados de animais, e principalmente em grandes produções de roupas. Segundo uma pesquisa realizada pelo IBOPE ( Instituto Brasileiro de Opinião Pública e Estatísticas) apontam o número de pessoas que procurando a surgir este hábito:
                            Com cada vez mais veganos espalhados pelo Brasil, a indústria está procurando alternativas para atender esse público. Novas marcas são criadas e as tradicionais também estão procurando oferecer, pelo menos, parte do seu portfólio livre de matéria-prima animal, seguindo o lado mais ético e ecológico.     Depois da alimentação, a moda é o segmento mais relevante para quem aderiu a essa tendência de comportamento. Quem deseja produzir para esse mercado precisa compreender o veganismo e conhecer a fundo as restrições com as quais os veganos convivem. Essa expertise é necessária para tirar eventuais dúvidas dos clientes, que desejam. Em 2014, as vendas de produtos veganos e vegetarianos cresceram 60% em relação ao ano de 2014.
                            Nota-se um crescimento no número de brasileiros na procura de coleções de roupas com opções de roupas sustentáveis, também é importante se notar a existências na carência de opções de roupas vegana pelo brasil. Sendo assim, veganismo não se trata apenas em hábito alimentar, como retrata a pesquisa realizada pelo IBOPE, após alimentação, a moda é o segmento mais relevante para quem decidiu essa tendência de comportamento. Como consequência disso o veganismo além de conscientizar o uso inadequado de produtos derivados a animais, também preocupação com o meio ambiente é uma consciência global, envolvendo para diminuição de ações prejudiciais à natureza. A união de moda e sustentabilidade engloba uma série de etapas que devem ser pensadas e executadas em todos os ciclos de produção. Veganismo vem trazendo os benefícios e a opção da sustentabilidade ao nosso planeta, principalmente no meio das moda com coleções totalmente sustentáveis ao consumos. Com isso, algumas marcas brasileiras adotaram essa ética como : Urban Flowers, King 55, Ahimsa, Insecta Shore e Fauno.
                          <v-spacer></v-spacer><br>
                          <strong>2. Justificativa:</strong><br>
                            Visando os conceitos estabelecidos anteriormente, com análise da  falta de informação sobre o tema e a carência presente no brasil, agregamos a tecnologia em meio aos conhecimentos em relação a área da base técnica,  com as ideias apresentadas criamos um site de compras e vendas de  roupas ecológicas, com a sensibilização da população com a origem das produções de roupas. 
                          <v-spacer></v-spacer><br>
                          <strong>3. Direitos dos animais:</strong><br>
                            O livro Animal liberation escrito pelo peter singer publicado em 1975 , demonstra em diversos  pontos como na recorrência a informações fatuais, utilizando dados de pesquisas com animais e pecuária industrial, demonstrando a relevância dos problemas, no qual trás com a  história da bioética, nele destaca-se o uso de animais para o consumo humano, peter singer buscava esclarecer discutir a liberdade animal. Trazendo um assunto pouco acessíveis  naquela época, no qual tem como principal objetivo de impor o fim ao preconceito diante da ideia de se considerar seriamente os interesses de animais não humanos, defendendo a igualdade de humanos e animais. Em meio ao estudo científico, análises dos argumentos levantados no qual defende teorias críticas às teses e evidências levantadas pela obra quanto ao status dos não humanos. Com isso ,atualmente todos animais possuem direito, com pouca informação sobre o tema, ocorre-se a exploração de animais, muitas das vezes retrata de forma natura. Com essa base de informação, foram criadas leis como:
                            Artigo 1°Todos os animais nascem iguais  perante a vida é    têm os mesmos direitos à existência.
                            Artigo 2° 1.Todo animal tem o direito a ser respeitado.
                            2.0 O homem, como espécie animal, não pode exterminar os outros animais ou explorá-los violando           esse direito; tem o dever de pôr os seus conhecimentos ao serviço dos animais.
                            Artigo 10° 1.Nenhum animal deve ser explorado para divertimento do homem. 
                            Artigo 13° 1.O animal morto deve ser tratado com respeito.
                            <br>(FIOCRUS)
                          <v-spacer></v-spacer><br>
                          <strong>3.1 Ética vegana:</strong><br>
                            De acordo com o David Arioch, durante a história tivemos um dos primeiros filósofo da humanidade que questionou o consumo da carne dizendo a seguinte frase:
                            <h4>“Enquanto o ser humano for implacável com as criaturas vivas, ele nunca conhecerá a saúde e a paz. Enquanto os homens continuam massacrando animais, eles também permanecerão matando uns aos outros. Na verdade, quem semeia assassinato e dor não pode colher alegria e amor.”</h4>
                            Pitágoras nasceu em Samos 570 a. C., foi um filósofo e matemático grego, que entre os 19 aos 20 anos de idade ele dispensava o consumo da carne, se alimentando apenas de ervas, a crueldade com os animais a exploração era a preocupação de Pitágoras. De acordo com a Stanford Encyclopedia of Philosophy, Pitágoras defendia o veganismo porque existiria uma crença na metempsicose, de transmigração da alma, que um espírito depois do antigo corpo habituado, voltaria a vida como humano,animal ou até mesmo em vegetais. Com isso o ato de comer carne ele relacionava ao canibalismo e a matança como assassinato, com essa ideia, Pitágoras reprovava a carne de animais dentro de nós, considerando uma “carne de um animal assassinado”. Partindo disso não defendia apenas os animais pela violência retratada, mais pela estimulação do ato, pensava-se com essas consequências a consciência humana iria elevar-se, conforme ao passar do tempo chegaria a um grau elevado de consciência, que poderia acabar com sua própria espécie. Pitágoras pediam para que tivessem compaixão de todos seres vivos, principalmente dos animais, pois eles também teriam sentimentos, referindo que animais e humanos estão familiarizados de alguma forma, mas ainda nos alimentamos da carne deles, que o fato de animais não terem consciência para pensar por si próprio, não era motivo de matanças. (DEVID ARIOCH)
                            Um dos primeiro traços do veganismo registrados na história foi dado com o filósofo grego Pitágoras, que logo na idade jovem  observava a exploração com os animais que os fazia questionava o consumo da carne animal. Como dito anteriormente Pitágoras reprovava o ato de comer carne, partindo disso não defendia apenas os animais pela violência retratada, mais pela estimulação do ato, pensava-se com essas consequências poderiam existir sérios problemas, até mesmo extinções de espécies. Como consequência daquela época existia uma crença metempsicose que distingue como:
                            Desde os tempos mais antigos, fala-se das inúmeras vidas do ser humano. Os defensores desta ideia acreditam que após a morte nosso caminho de vida não termina, mas adquirimos novas formas de existência em diferentes seres.
                            Para Pitágoras de Samos e seus seguidores a alma dos homens se encontra aprisionada em um corpo. Depois da morte física, a alma é reencarnada em outro corpo de maneira sucessiva com o fim de purificar-se. Através da hipnose alguns pesquisadores conseguem fazer com que as pessoas se lembrem de suas experiências em outras vidas. O fenômeno das regressões implica logicamente em um processo de reencarnação.
                            Aqueles que praticam as técnicas de regressão ao passado têm como finalidade corrigir alguns sintomas de seus pacientes. Em outras palavras, alguns traumas ou problemas do presente procedem de uma vida anterior.
                          <v-spacer></v-spacer><br>
                          <strong> 3.2 Veganismo e moda: </strong><br>
                            Com tudo, na moda os veganos excluem qualquer tipo de traços animais em coleções de roupas, com isso, a  ULA (União Libertária Animal) é publicado artigos explicativos sobre o modo de  fabricação de roupas para consumos que inicialmente é um fator muito importante para a moda vegana, em artigos da união libertária animal o respeito para o vestuário é um dos assuntos abordados, em um dos artigos é citados dados de que o Brasil é um grande produtor de peles de chinchilas, para a exportação. Por exemplo, é necessário o abate de 200 chinchilas para a confecção de um único casaco de pele. Outro fator importante para moda é o consumo excessivo que atualmente é comum, no processo de compra, com imposições do capitalismo, interferindo nos hábitos de consumo levam esse ato ao extremo, comprando deliberadamente diversas coisas das quais geralmente não necessitam, no qual trás a problematização no trabalho escravo animal, e a sustentabilidade do nosso problema,  ULA diz em um artigo publicado:
                            A pele de animais era usada pelos chamados homens das cavernas para lhes aquecer os corpos. Hoje em dia ela virou um “luxo desnecessário” já que culturalmente foi criado um status sobre ela. Esse status provém, mesmo que de forma alienada, da necessidade de se afirmar perante terceiros, demonstrando poder. Isso não engloba apenas o financeiro já que hoje em dia a pele, dentre muitos outros artigos, se popularizou muito; mas também o poder de opressor ostentando oprimido, os animais. Sua caça morta e lhe adornando o pescoço (União Libertária Animal, 2015).
                            Com isso, algumas marcas brasileiras adotaram essa bioética como : Urban Flowers, são sapatos criados de maneira consciente. King55, que promete estilo e sofisticação com sua linha completa de vestuário. Com um portfólio que impressiona pela qualidade e pela quantidade de peças, eles também se preocupam em promover ações sustentáveis.  Ahimsa, é um princípio ético e religioso adotado pelo hinduísmo que consiste em não violência aos seres. Insecta Shoes,que une o artesanal, desde 2014 eles produzem calçados a partir de retalhos e tecidos vintage reutilizados. e Fauno a marca preza por roupas livres de crueldade animal e incentivam o comércio justo no Brasil.
                          <v-spacer></v-spacer><br>
                          <strong> 4 Resultados: </strong><br>  
                            Observamos o descaso da sociedade sobre os direitos dos animais e sua exploração para fabricação de consumo humano, a partir do entendimento dos conceitos e a necessidade de produções de roupas sem traços animais, sensibilizamos com o veganismo tivemos a ideia de desenvolver um site com a ajuda da tecnologia, agregado com o ensino médio técnico a informática, com conhecimento para construção do site foi utilizado o Vue.js, que é um framework de código-aberto, utilizado no desenvolvimento de interfaces de usuários e aplicativos de páginas únicas. Para construções de aplicações  utilizamos o Node.js, e o Visual Studio Code, onde escrevemos os nossos códigos de desenvolvimento. para a finalização da loja de compras de roupas, calçados e acessórios, com intuito de suprir a necessidade a carência da moda no brasil.
                          <v-spacer></v-spacer><br>
                          <strong> 5.0 Conclusão:</strong><br>
                            Identificamos a falta de informação sobre o veganismo a buscas insaciáveis dos valores dessa ação, não somente para uma abundância para o corpo humanos, mas sobretudo a liberdade de todos seres vivos, o uso inadequado sobre as espécies, e exploração indevida para fabricação de forma que sacia a necessidade da humanidade, as consequências geradas estima-se a extinção de algumas espécies. Portanto trazemos informação sobre um tema cuja sendo suma importância, e conscientização da população não somente a esse esses fatores. Idealizamos a realização de um site de loja de roupa vegana para suprir a carência da moda vegana, para os quais dias atuais.
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red" text @click="dialog = false">
                          <v-icon>thumb_down</v-icon>
                        </v-btn>
                        <v-btn color="primary" text @click="dialog = false">
                          <v-icon>thumb_up</v-icon>
                        </v-btn>
                        <v-btn color="" text @click="dialog = false" to="/vegas">
                          <v-icon>visibility</v-icon>
                        </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                    <v-btn flat to="/usuario">
                    <v-icon color="grey lighten-1">
                        person_pin
                    </v-icon>
                    </v-btn>      
                    <v-autocomplete :items="components" color="dark" hide-no-data hide-selected 
                    placeholder="Pesquisar...." append-icon="search" class="hidden-sm-and-down" return-object>
                    </v-autocomplete>     
                  </v-toolbar-items>
            </v-toolbar>
            <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in prodCarousel"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  <br>
  <v-layout align-end justify-space-around row fill-height mt-5 wrap>
    <v-flex xs3 px-2 mb-5 v-for="(produto,i) in produtos" :key="i">
      <v-hover class="hidden-sm-and-down">
        <v-card slot-scope="{ hover }" class="mx-auto" color="grey lighten-4" max-width="250">
          <v-img :aspect-ratio="16/9" :src="produto.src">
            <v-expand-transition>
              <div v-if="hover" style="height: 100%;"
                class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-1 white--text">
                {{produto.preco}}
              </div>
            </v-expand-transition>
            <v-chip>
              <v-icon>
                favorite_border
              </v-icon>
            </v-chip>
          </v-img>
          <v-card-text class="pt-4" style="position: relative;">
          <v-btn absolute class="white--text" fab large right top>
              <v-icon large color="grey lighten-1" >
                shopping_cart 
              </v-icon>           
          </v-btn>
            <div class="font-weight-light grey--text title mb-2">{{produto.descricao}}</div>
            <h3 class="display-1 font-weight-light black--text mb-2">{{produto.marca}}</h3>
            <div class="font-weight-light title mb-2">
              {{produto.informacao}}
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
  <v-footer>
    <div>&copy; 2019</div>
  </v-footer>
</v-app>
</div>
</template>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>

<script>
export default {
    data() {
        return{
            drawer: false,
            show: true,
            mini: true,
            dialog: false,
            components: [
            'Roupas','Calçados','Acessorios'
            ],
        prodCarousel:[
          {
            src: 'http://1.bp.blogspot.com/-QVgjKBbi_wc/UDjpOvXBXwI/AAAAAAAAAws/w4HJrWUPPGw/s1600/viagem+11.jpg',
          },
          {
            src: 'https://vivagreen.com.br/wp-content/uploads/2016/08/tecidos-veganos-e1471951879868.jpg'
          },
          {
            src: 'https://www.simbiotico.eco/wp-content/uploads/sv-eco-clothing.jpg'
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKoIJrAFrWhYCVdkqBtFATzHX8Gmkt-yl1rWAx1Q9ewawoAF3q'
          }
        ],
         produtos: [
          {
            src: 'https://www.hypeness.com.br/wp-content/uploads/2015/07/modavegan18.jpg',
            preco: "R$ 10,00",
            descricao: "Roupa cara",
            marca: "Forever 21",
            informacao: "Loja no Bosque dos Ipes",
          },
          {
            src: 'https://www.king55.com.br/estatico/king/images/temp/900_17960.jpeg',
            preco: "R$ 80,00",
            descricao: "",
            marca: "king 55",
            informacao: ""
          },
          {
            src: 'https://www.king55.com.br/estatico/king/images/temp/900_16958.jpeg',
            preco: "R$ 90,00",
            descricao: "",
            marca: "king 55",
            informacao: ""
          },
          {
            src: 'https://www.king55.com.br/estatico/king/images/temp/900_18636.jpeg',
            preco: "R$ 70,00",
            descricao: "",
            marca: "King 55",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRpPKsQVvTkyuM1HUVdH3JoEpDWHPSGjxWDpP5yL6b9YiHaWQsZvue5cWe6XHefNKhiDSj-qjm_Xx3LOyC-sBWss3-ZVq4oLQ&usqp=CAE',
            preco: "R$ 270,00",
            descricao: "",
            marca: "Forever 21",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRMuHshhfaAr5vRjkMbY3zVBcTpxvY0-Rzw2RzcxSXBPbqYx9Vn2gClh8KGwYH2apfHenL2Aqd28SYpblY9LT0IPUqzF4eQaOC3PdKFNCagiV_KYjwNqNYxEw&usqp=CAE',
            preco: "R$ 170,00",
            descricao: "",
            marca: "Viva Green",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTs7gZHIBHYXl0rWWWFBC2E3pZCkyvNI4H3IKYXNC6eTaowo8g85NnJ3m2oeMVh9crC2bZmtWCpnJiTTX2F4kO_VuFZIx4TifYKro7VutWg9Vec3a038U-Dhg&usqp=CAE',
            preco: "R$ 50,00",
            descricao: "",
            marca: "Viva Green",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTGpn5vf9amOY0YVaYXV6G3KtVlfbsyO1DDMdJmGupwFrX9DstglqmcxRPDTY4HKwpta1ReHrNmbiV6Btv378qhA8-7EDPqLCQbJ5oy6XiyIeIA_ylAwbwqqQ&usqp=CAE',
            preco: "R$ 60,00",
            descricao: "",
            marca: "Forever 21",
            informacao: ""
          },
          {
            src: 'https://i.pinimg.com/474x/bf/f4/42/bff442999410181b58d967ec5e5c38ca.jpg',
            preco: "R$ 50,00",
            descricao: "",
            marca: "V",
            informacao: ""
          },
          {
            src: 'https://assets.xtechcommerce.com/uploads/images/thumbnails/121c67e2e0cb7cf100504ac2cd275568.jpg',
            preco: "R$ 85,00",
            descricao: "",
            marca: "E",
            informacao: ""
          },
          {
            src: 'https://res.cloudinary.com/amarotech/image/fetch/c_limit,f_auto,dpr_1,w_440,q_auto:best/v11553108149/https://cdn.amaro.com/images/products/20020160_047_original_1.jpg',
            preco: "R$ 79,00",
            descricao: "",
            marca: "G",
            informacao: ""
          },
          {
            src: 'https://www.freetheessence.com.br/lib/uploads/2016/08/pi%C3%B1atex.jpg',
            preco: "R$ 1,00",
            descricao: "",
            marca: "A",
            informacao: ""
          },
          {
            src: 'https://vivagreen.com.br/wp-content/uploads/2016/08/tecidos-veganos-e1471951879868.jpg',
            preco: "R$ 30,00",
            descricao: "",
            marca: "N",
            informacao: ""
          },
          {
            src: 'http://moda.atarde.uol.com.br/wp-content/uploads/2018/03/insecta-2.jpg',
            preco: "R$ 40,00",
            descricao: "",
            marca: "O",
            informacao: ""
          },
          {
            src: 'https://static.zattini.com.br/produtos/calca-pantalona-crepe/03/IGA-0145-203/IGA-0145-203_zoom1.jpg?resize=544:*',
            preco: "R$ 70,00",
            descricao: "",
            marca: "Pantalona",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_5DYojZiTzrOx-s1qODP2VE2WGoYduRngqVBjTNTcWfso2dd',
            preco: "R$ 80,00",
            descricao: "",
            marca: "Panta louna",
            informacao: ""
          },
        ],
      }
    }
}
</script>

