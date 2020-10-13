import { Injectable } from '@angular/core';
import { title } from 'process';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  public recipes: Recipe[] = [
    {
      id:'r1',
      imageUrl:'https://images-na.ssl-images-amazon.com/images/I/71Oc37ZSxaL._AC_SL1500_.jpg',
      merek:'NVidia',
      model:'GeForce RTX 2080 Ti 11GB Blower Edition',
      harga:'30774428',
      stock:10,
      deskripsi:'NVIDIA turing architecture, combined with the all-new GeForce RTX platform, fuses together real-time ray tracing, artificial intelligence, and programmable shading.',
      typeDetails: ['gpu']
    },
    {
      id:'r2',
      imageUrl:'https://cdn.mos.cms.futurecdn.net/QBah5JuQjwzJFNEcAzxij5-970-80.jpg',
      merek:'Intell',
      model:'Core I7-10600K',
      harga:'3838120',
      stock:4,
      deskripsi:"For gamers looking for the edge of performance, and enthusiasts who like to tune their processors without expensive supporting components, "+
                "the Core i5-10600K slips in as the new mainstream champ. Intel's Core i5-10600K comes with six cores and twelve threads, a doubling of the thread count compared to the previous-gen Core i5-9600K, but slots in at the same $262 price point for the fully-equipped model and $237 for the graphics-less KF variant. The increased thread counts, paired with substantially higher boost frequencies across the board, equates to much faster gameplay than the previous-gen Core i5 and generally matches the previous-gen Core i7-9700K. That makes this chip a great deal for gamers who prize high refresh rates, particularly if they plan to move forward to the new AMD or Nvidia graphics cards that become available later this year."+
                "The Core i5-10600K's twelve threads also reduce the gap between it and competing AMD processors in heavily-threaded workloads. Still, AMD's Ryzen 5 3600X and Ryzen 5 3600 are viable alternatives if you're looking for a chip that comes with a bundled cooler and a lower price point. You'll need to pick up a new LGA1200 motherboard and have a compatible cooling solution to run the Core i5-10600K (it doesn't come with a bundled cooler, but LGA1151 coolers work fine). However, the Core i5-10600K offers the best gaming performance in its price bracket, delivering previous-gen Core i7 gaming performance at Core i5 pricing.",
      typeDetails: ['cpu','3.5', '4.7', '16','32']
    },
    {
      id:'r3',
      imageUrl:'https://cdn.mos.cms.futurecdn.net/SWkrDZbyjj7EsW8mBLhpHT-970-80.jpg.webp',
      merek:'Corsair',
      model:'Vengeance LED',
      harga:'1726100',
      stock:5,
      deskripsi:'Corsair is one of the most trusted names when it comes to the best RAM on the market. Its Vengeance series, especially, has something for everyone with its LED DDR4 offerings. On top of giving PC builders that extra touch of vibrant lighting, this RAM has robust heat spreaders that maximise cooling for higher overclocking and maximum performance. Corsair’s Vengeance LED DDR4 series also features CL16 latency and whopping 3,466 MHz speeds, so it’s just as fast and responsive as it is aesthetic.',
      typeDetails: ['ram','3200', '16']
    },
    {
      id:'r4',
      imageUrl:'https://cdn.omlet.co.uk/images/originals/Russian_winter_white_pouches.jpg',
      merek:'hamster GPU',
      model:'Gtx Cricetinae',
      harga:'50000',
      stock:0,
      deskripsi:'GPU tenaga hamster pertama di dunia',
      typeDetails: ['gpu']
    },
    {
      id:'r5',
      imageUrl:'https://cdn.mos.cms.futurecdn.net/qwEdsWJXs7RK4ipEyhJHk6-970-80.png',
      merek:'Amd',
      model:'Ryzen 9 3950X',
      harga:'12350000',
      stock:16,
      deskripsi:"High end desktop processors have long offered the ultimate in performance, as long as you were willing to pay the price. Aside from high MSRPs, the chips also require expensive accommodations, like beefy motherboards and the added cost of fully populating quad-channel memory controllers. Add in the inevitable trade-offs, like reduced performance in lightly-threaded applications and games, and any cost-conscious users who could benefit from the threaded horsepower of a HEDT chip just settle for mainstream offerings."+
                "Now AMD's Ryzen 9 3950X, with 16 cores and 32 threads, brings HEDT-class performance to mainstream motherboards, lowering the bar for entry. The 3950X carries a $749 price tag, but that’s downright affordable compared to competing HEDT processors."+
                "We generally don't recommend HEDT processors for enthusiasts that are only interested in gaming. Gamers are best served by mainstream processors (with fewer cores and higher clocks) that are often faster in games; the Ryzen 9 3950X also falls into the same category. However, if you're after a chip and platform that can do serious work seriously fast, but still be nimble enough deliver high-refresh gameplay at the end of the day, the Ryzen 9 3950X fits the bill like no other CPU before it",
      typeDetails: ['cpu','3.5', '4.7', '16','32']
    },
    {
      id:'r6',
      imageUrl:'https://cdn.mos.cms.futurecdn.net/neBFugDPxwSyS92xEM7PeY-970-80.jpg.webp',
      merek:'NVidia',
      model:'GeForce RTX 2070 Super',
      harga:'9650000',
      stock:3,
      deskripsi:"The RTX 2070 Super keeps its predecessor's $499 price and gives a modest boost to performance.",
      typeDetails: ['gpu']
    },
    {
      id:'r7',
      imageUrl:'https://cdn.mos.cms.futurecdn.net/Vqoha9GFY6krezcWbon7oa-970-80.jpg.webp',
      merek:'G.Skill',
      model:'Trident Z RGB',
      harga:'4570000',
      stock:25,
      deskripsi:'At this point, everyone kind of knows about G. Skill and its Trident Z RGB series of RAM. This is some of the best RAM not just because it’s fast, but the top of every DIMM features a full-spectrum rainbow wave light bar that you can use to match your RGB lighting across your entire system. Trident Z RGB DDR4 RAM features CAS latencies between 14 and 19 which is awesome enough, but with speeds up to 4,266, it’s almost perfect. No matter your aesthetic, it’s hard to argue with the G. Skill TridentZ RGB as the best RGB RAM.',
      typeDetails: ['ram','3200', '16']
    },
    {
      id:'r8',
      imageUrl:'https://cdn.mos.cms.futurecdn.net/vPRGQ4EtQymNZTD3QSG2oF-970-80.jpg.webp',
      merek:'Asus',
      model:'ROG Maximus XII Extreme',
      harga:'10946000',
      stock:21,
      deskripsi:"If you want the best, most fully featured Intel Comet Lake motherboard then I'm afraid you're going to have to pay for it. And pay through the nose if Asus' Z490 Maximus XII Extreme is anything to go by. It is, as the name suggests, extreme, packing in a variety of luxurious, and incredibly handy extras (a frickin' screwdriver with interchangeable heads for one), and it's also one of the highest performing Z490 boards we've tested.",
      typeDetails: ['motherboard','Intel Z490', '2x PCIe 3.0 x16 (or x8/x8), 1x PCIe 3.0 x4 | Video ports: 2x Thunderbolt 3 ports on extension card (DP1.4) ']
    },
    {
      id:'r9',
      imageUrl:'https://cdn.mos.cms.futurecdn.net/AZmXQvwu96scNsV3y3RBnX-970-80.jpg.webp',
      merek:'Gigabyte',
      model:'Z390 Aorus Ultra',
      harga:'4250000',
      stock:2,
      deskripsi:"The Gigabyte Z390 Aorus Ultra competes with the MSI Z390 Gaming Pro Carbon AC and the Asus ROG Maximus XI Hero (Wi-Fi), but with a lower price tag and more features. It has triple M.2 slots for your super-speedy NVMe SSD needs, Intel Wi-Fi Wave2 and Ethernet, a full RGB treatment with multiple headers, and ALC1220 audio. You'd have to climb right to the top of the product stack to get the same from MSI and ASUS, both of whom offer a little more polish, but also charge plenty for the privilege. Though there's a lot to be said for extreme motherboards, this is a great value Intel board.",
      typeDetails: ['motherboard','Intel Z390', 'PCIe x16, PCIe x16 (x8), PCIe x16 (x4), 3x PCIe x1']
    },
    {
      id:'r6',
      imageUrl:'https://cdn.mos.cms.futurecdn.net/neBFugDPxwSyS92xEM7PeY-970-80.jpg.webp',
      merek:'NVidia',
      model:'EVGA GeForce GTX 950 2GB SSC GAMING',
      harga:'4862000',
      stock:0,
      deskripsi:"We don't know when or if this item will be back in stock.",
      typeDetails: ['gpu']
    },
    
  ]
  
  constructor() { }

  getAllRecipes()
  {
    return [...this.recipes];
  }
  getAllEligableRecipes()
  {
    return this.recipes.filter(recipe =>
      {
        return recipe.stock > 0;
      });
  }

  getRecipe(recipeId:string)
  {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })}
  }
  deleteRecipe(recipeId: string)
  {
    
    this.recipes = this.recipes.filter(recipe =>
      {
        return recipe.id !== recipeId;
      });
  }

  addRecipes(id:string,imageUrl:string, merek: string,model:string,harga:string,stock:number,deskripsi:string, typeDetails:string[])
  {
    
    this.recipes.push({
      id:id,
      imageUrl:imageUrl,
      merek:merek,
      model:model,
      harga:harga,
      stock:stock,
      deskripsi:deskripsi,
      typeDetails: typeDetails
    })
    //console.log( this.recipes);
      
  }

  editRecipe(recipeId:string,imageUrl:string, merek: string,model:string,harga:string,stock:number,deskripsi:string, typeDetails:string[])
  {
    for(var x=0;x<this.recipes.length;x++)
    {
      if(this.recipes[x].id == recipeId)
      {
        this.recipes[x].imageUrl = imageUrl;
        this.recipes[x].merek = merek;
        this.recipes[x].model = model;
        this.recipes[x].harga = harga;
        this.recipes[x].stock = stock;
        this.recipes[x].deskripsi = deskripsi;
        this.recipes[x].typeDetails = typeDetails;
      }
    }
  }
}
