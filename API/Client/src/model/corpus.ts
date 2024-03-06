import { Author } from "./author"
import { Book } from "./book"

const authors: Author[] = []
const books = new Map<string, Book[]>()

authors.push({
  name: "Agatha Christie",
  about: "Agatha Christie is the best-selling novelist of all time and is best known for her 66 detective novels and 14 short story collections, as well as the world's longest-running play, The Mousetrap.",
  quote: "The happy people are failures because they are on such good terms with themselves they don't give a damn.",
  profilePic: "agatha-christie.png"
})
books.set("Agatha Christie", [
  { name: "Poirot Investigates", url: "https://www.gutenberg.org/ebooks/61262" },
  { name: "The Big Four", url: "https://www.gutenberg.org/ebooks/70114" },
  { name: "The Hunter's Lodge Case", url: "https://www.gutenberg.org/ebooks/67160" },
  { name: "The Man in the Brown Suit", url: "https://www.gutenberg.org/ebooks/61168" },
  { name: "The Missing Will", url: "https://www.gutenberg.org/ebooks/67173" },
  { name: "The Murder of Roger Ackroyd", url: "https://www.gutenberg.org/ebooks/69087" },
  { name: "The Murder on the Links", url: "https://www.gutenberg.org/ebooks/58866" },
  { name: "The Mysterious Affair at Styles", url: "https://www.gutenberg.org/ebooks/863" },
  { name: "The Mystery of the Blue Train", url: "https://www.gutenberg.org/ebooks/72824" },
  { name: "The Plymouth Express Affair", url: "https://www.gutenberg.org/ebooks/66446" },
  { name: "The Secret Adversary", url: "https://www.gutenberg.org/ebooks/1155" },
  { name: "The Secret of Chimneys", url: "https://www.gutenberg.org/ebooks/65238" }
])

authors.push({
  name: "Alexandre Dumas",
  about: "Alexandre Dumas is one of the most widely read French authors whose most famous works include The Three Musketeers and The Count of Monte Cristo.",
  quote: "All generalizations are dangerous, even this one.",
  profilePic: "alexandre-dumas.jpg"
})
books.set("Alexandre Dumas", [
  { name: "Chicot the Jester", url: "https://www.gutenberg.org/ebooks/7426" },
  { name: "Ten Years Later", url: "https://www.gutenberg.org/ebooks/2681" },
  { name: "The black tulip", url: "https://www.gutenberg.org/ebooks/965" },
  { name: "The Borgias", url: "https://www.gutenberg.org/ebooks/2741" },
  { name: "The Corsican Brothers", url: "https://www.gutenberg.org/ebooks/41881" },
  { name: "The Count of Monte Cristo", url: "https://www.gutenberg.org/ebooks/1184" },
  { name: "The Man in the Iron Mask", url: "https://www.gutenberg.org/ebooks/2759" },
  { name: "The Three Musketeers", url: "https://www.gutenberg.org/ebooks/1257" },
  { name: "The Vicomte de Bragelonne", url: "https://www.gutenberg.org/ebooks/2609" },
  { name: "The Wolf-Leader", url: "https://www.gutenberg.org/ebooks/51054" },
  { name: "Twenty Years After", url: "https://www.gutenberg.org/ebooks/1259" }
])

authors.push({
  name: "Arthur Conan Doyle",
  about: "Arthur Conan Doyle was a Scottish writer and physician best known for creating the character of Sherlock Holmes, who is widely considered to be the most popular fictional detective.",
  quote: "The love of books is among the choicest gifts of the gods.",
  profilePic: "arthur-conan-doyle.jpg"
})
books.set("Arthur Conan Doyle", [
  { name: "A Study in Scarlet", url: "https://www.gutenberg.org/ebooks/244" },
  { name: "His Last Bow: An Epilogue of Sherlock Holmes", url: "https://www.gutenberg.org/ebooks/2350" },
  { name: "Tales of Terror and Mystery", url: "https://www.gutenberg.org/ebooks/537" },
  { name: "The Adventure of the Dying Detective", url: "https://www.gutenberg.org/ebooks/2347" },
  { name: "The Adventures of Sherlock Holmes", url: "https://www.gutenberg.org/ebooks/1661" },
  { name: "The case-book of Sherlock Holmes", url: "https://www.gutenberg.org/ebooks/69700" },
  { name: "The Hound of the Baskervilles", url: "https://www.gutenberg.org/ebooks/2852" },
  { name: "The Lost World", url: "https://www.gutenberg.org/ebooks/139" },
  { name: "The Return of Sherlock Holmes", url: "https://www.gutenberg.org/ebooks/221" },
  { name: "The Valley of Fear", url: "https://www.gutenberg.org/ebooks/3289" },
  { name: "The White Company", url: "https://www.gutenberg.org/ebooks/903" }
])

authors.push({
  name: "Charles Dickens",
  about: "Charles Dickens was an English novelist and social critic who created some of the world's best-known fictional characters, and is regarded by many as the greatest novelist of the Victorian era.",
  quote: "We forge the chains we wear in life.",
  profilePic: "charles-dickens.jpg"
})
books.set("Charles Dickens", [
  { name: "A Child's Dream of a Star", url: "https://www.gutenberg.org/ebooks/42232" },
  { name: "A Child's History of England", url: "https://www.gutenberg.org/ebooks/699" },
  { name: "A Christmas Carol", url: "https://www.gutenberg.org/ebooks/24022" },
  { name: "A Message from the Sea", url: "https://www.gutenberg.org/ebooks/1407" },
  { name: "A Tale of Two Cities", url: "https://www.gutenberg.org/ebooks/98" },
  { name: "Barnaby Rudge: A Tale of the Riots of 'Eighty", url: "https://www.gutenberg.org/ebooks/917" },
  { name: "Bleak House", url: "https://www.gutenberg.org/ebooks/1023" },
  { name: "David Copperfield", url: "https://www.gutenberg.org/ebooks/766" },
  { name: "Doctor Marigold", url: "https://www.gutenberg.org/ebooks/1415" },
  { name: "Dombey and Son", url: "https://www.gutenberg.org/ebooks/821" },
  { name: "George Silverman's Explanation", url: "https://www.gutenberg.org/ebooks/810" },
  { name: "Great Expectations", url: "https://www.gutenberg.org/ebooks/1400" },
  { name: "Hard Times", url: "https://www.gutenberg.org/ebooks/786" },
  { name: "Holiday Romance", url: "https://www.gutenberg.org/ebooks/809" },
  { name: "Hunted Down: The Detective Stories of Charles Dickens", url: "https://www.gutenberg.org/ebooks/807" },
  { name: "Little Dorrit", url: "https://www.gutenberg.org/ebooks/963" },
  { name: "Martin Chuzzlewit", url: "https://www.gutenberg.org/ebooks/968" },
  { name: "Master Humphrey's Clock", url: "https://www.gutenberg.org/ebooks/588" },
  { name: "Mugby Junction", url: "https://www.gutenberg.org/ebooks/27924" },
  { name: "Nicholas Nickleby", url: "https://www.gutenberg.org/ebooks/967" },
  { name: "Oliver Twist", url: "https://www.gutenberg.org/ebooks/730" },
  { name: "Pictures from Italy", url: "https://www.gutenberg.org/ebooks/650" },
  { name: "Sunday Under Three Heads", url: "https://www.gutenberg.org/ebooks/922" },
  { name: "The Battle of Life", url: "https://www.gutenberg.org/ebooks/676" },
  { name: "The Chimes", url: "https://www.gutenberg.org/ebooks/653" },
  { name: "The Cricket on the Hearth: A Fairy Tale of Home", url: "https://www.gutenberg.org/ebooks/678" },
  { name: "The Haunted Man and the Ghost's Bargain", url: "https://www.gutenberg.org/ebooks/644" },
  { name: "The Lazy Tour of Two Idle Apprentices", url: "https://www.gutenberg.org/ebooks/888" },
  { name: "The Magic Fishbone", url: "https://www.gutenberg.org/ebooks/23344" },
  { name: "The Mystery of Edwin Drood", url: "https://www.gutenberg.org/ebooks/564" },
  { name: "The Old Curiosity Shop", url: "https://www.gutenberg.org/ebooks/700" },
  { name: "The Perils of Certain English Prisoners", url: "https://www.gutenberg.org/ebooks/1406" },
  { name: "The Seven Poor Travellers", url: "https://www.gutenberg.org/ebooks/1392" },
  { name: "The Uncommercial Traveller", url: "https://www.gutenberg.org/ebooks/914" },
  { name: "The Wreck of the Golden Mary", url: "https://www.gutenberg.org/ebooks/1465" },
  { name: "To Be Read at Dusk", url: "https://www.gutenberg.org/ebooks/924" }
])

authors.push({
  name: "Charlotte Brontë",
  about: "Charlotte Brontë was an English novelist and poet best known for her novel Jane Eyre, a strong narrative of a woman in conflict with her natural desires and social condition.",
  quote: "Conventionality is not morality.",
  profilePic: "charlotte-bronte.jpg"
})
books.set("Charlotte Brontë", [
  { name: "Jane Eyre: An Autobiography", url: "https://www.gutenberg.org/ebooks/1260" },
  { name: "Shirley", url: "https://www.gutenberg.org/ebooks/30486" },
  { name: "Villette", url: "https://www.gutenberg.org/ebooks/9182" },
  { name: "The Professor", url: "https://www.gutenberg.org/ebooks/1028" }
])

authors.push({
  name: "Edgar Allan Poe",
  about: "Edgar Allan Poe was an American writer, poet, author, editor, and literary critic who is best known for his poetry and short stories, particularly his tales of mystery and the macabre.",
  quote: "Stupidity is a talent for misconception.",
  profilePic: "edgar-allan-poe.jpg"
})
books.set("Edgar Allan Poe", [
  { name: "The Cask of Amontillado", url: "https://www.gutenberg.org/ebooks/1063" },
  { name: "The Fall of the House of Usher", url: "https://www.gutenberg.org/ebooks/932" },
  { name: "The Masque of the Red Death", url: "https://www.gutenberg.org/ebooks/1064" },
  { name: "The Narrative of Arthur Gordon Pym of Nantucket", url: "https://www.gutenberg.org/ebooks/51060" }
])

authors.push({
  name: "Ernest Hemingway",
  about: "Ernest Hemingway was an American novelist and short-story writer who was awarded the Nobel Prize for Literature in 1954. He was noted both for the intense masculinity of his writing and for his adventurous and widely publicized life.",
  quote: "Courage is grace under pressure.",
  profilePic: "ernest-hemingway.jpg"
})
books.set("Ernest Hemingway", [
  { name: "The Sun Also Rises", url: "https://www.gutenberg.org/ebooks/67138" },
  { name: "In Our Time", url: "https://www.gutenberg.org/ebooks/61085" },
  { name: "Men Without Women", url: "https://www.gutenberg.org/ebooks/69683" }
])

authors.push({
  name: "F. Scott Fitzgerald",
  about: "F. Scott Fitzgerald was an American novelist, essayist, and short story writer best known for his novels depicting the flamboyance and excess of the Jazz Age — a term he popularized in his short story collection Tales of the Jazz Age.",
  quote: "The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function.",
  profilePic: "f-scott-fitzgerald.webp"
})
books.set("F. Scott Fitzgerald", [
  { name: "All the Sad Young Men", url: "https://www.gutenberg.org/ebooks/68229" },
  { name: "Flappers and Philosophers", url: "https://www.gutenberg.org/ebooks/4368" },
  { name: "Tales of the Jazz Age", url: "https://www.gutenberg.org/ebooks/6695" },
  { name: "The Beautiful and Damned", url: "https://www.gutenberg.org/ebooks/9830" },
  { name: "The Great Gatsby", url: "https://www.gutenberg.org/ebooks/64317" },
  { name: "This Side of Paradise", url: "https://www.gutenberg.org/ebooks/805" }
])

authors.push({
  name: "L. Frank Baum",
  about: "Lyman Frank Baum was an American author best known for his children's fantasy books, particularly The Wonderful Wizard of Oz, part of a series.",
  quote: "Hearts will never be practical until they can be made unbreakable.",
  profilePic: "frank-baum.jpg"
})
books.set("L. Frank Baum", [
  { name: "A Kidnapped Santa Claus", url: "https://www.gutenberg.org/ebooks/519" },
  { name: "Dorothy and the Wizard in Oz", url: "https://www.gutenberg.org/ebooks/22566" },
  { name: "Glinda of Oz", url: "https://www.gutenberg.org/ebooks/39868" },
  { name: "John Dough and the Cherub", url: "https://www.gutenberg.org/ebooks/47166" },
  { name: "Ozma of Oz", url: "https://www.gutenberg.org/ebooks/33361" },
  { name: "Rinkitink in Oz", url: "https://www.gutenberg.org/ebooks/25581" },
  { name: "The Cowardly Lion of Oz", url: "https://www.gutenberg.org/ebooks/58765" },
  { name: "The Emerald City of Oz", url: "https://www.gutenberg.org/ebooks/41667" },
  { name: "The Enchanted Island of Yew", url: "https://www.gutenberg.org/ebooks/518" },
  { name: "The Flying Girl", url: "https://www.gutenberg.org/ebooks/53386" },
  { name: "The Land of Oz", url: "https://www.gutenberg.org/ebooks/53844" },
  { name: "The Life and Adventures of Santa Claus", url: "https://www.gutenberg.org/ebooks/520" },
  { name: "The Lost Princess of Oz", url: "https://www.gutenberg.org/ebooks/24459" },
  { name: "The Magic of Oz", url: "https://www.gutenberg.org/ebooks/50194" },
  { name: "The Marvelous Land of Oz", url: "https://www.gutenberg.org/ebooks/54" },
  { name: "The Master Key", url: "https://www.gutenberg.org/ebooks/436" },
  { name: "The Patchwork Girl of Oz", url: "https://www.gutenberg.org/ebooks/32094" },
  { name: "The Road to Oz", url: "https://www.gutenberg.org/ebooks/26624" },
  { name: "The Royal Book of Oz", url: "https://www.gutenberg.org/ebooks/30537" },
  { name: "The Scarecrow of Oz", url: "https://www.gutenberg.org/ebooks/51263" },
  { name: "The Sea Fairies", url: "https://www.gutenberg.org/ebooks/48778" },
  { name: "The Tin Woodman of Oz", url: "https://www.gutenberg.org/ebooks/30852" },
  { name: "The Wonderful Wizard of Oz", url: "https://www.gutenberg.org/ebooks/55" }
])

authors.push({
  name: "Fyodor Dostoevsky",
  about: "Fyodor Dostoevsky was a Russian novelist, short story writer, essayist and journalist. Numerous literary critics regard him as one of the greatest novelists in all of world literature, as many of his works are considered highly influential masterpieces.",
  quote: "The best way to keep a prisoner from escaping is to make sure he never knows he's in prison.",
  profilePic: "fyodor-dostoevsky.jpg"
})
books.set("Fyodor Dostoevsky", [
  { name: "Crime and Punishment", url: "https://www.gutenberg.org/ebooks/2554" },
  { name: "The Brothers Karamazov", url: "https://www.gutenberg.org/ebooks/28054" },
  { name: "The Grand Inquisitor", url: "https://www.gutenberg.org/ebooks/8578" },
  { name: "The Idiot", url: "https://www.gutenberg.org/ebooks/2638" },
  { name: "White Nights and Other Stories", url: "https://www.gutenberg.org/ebooks/36034" }
])

authors.push({
  name: "Herman Melville",
  about: "Herman Melville was an American novelist, short story writer, and poet of the American Renaissance period. He is best known for his novels of the sea, including his masterpiece, Moby Dick (1851).",
  quote: "It is better to fail in originality than to succeed in imitation.",
  profilePic: "herman-melville.jpg"
})
books.set("Herman Melville", [
  { name: "Bartleby, the Scrivener: A Story of Wall-Street", url: "https://www.gutenberg.org/ebooks/11231" },
  { name: "I and My Chimney", url: "https://www.gutenberg.org/ebooks/2694" },
  { name: "Mardi: and A Voyage Thither, Vol. I", url: "https://www.gutenberg.org/ebooks/13720" },
  { name: "Mardi: and A Voyage Thither, Vol. II", url: "https://www.gutenberg.org/ebooks/13721" },
  { name: "Moby Dick; Or, The Whale", url: "https://www.gutenberg.org/ebooks/2701" },
  { name: "Omoo: Adventures in the South Seas", url: "https://www.gutenberg.org/ebooks/4045" },
  { name: "Pierre; Or The Ambiguities", url: "https://www.gutenberg.org/ebooks/34970" },
  { name: "Redburn. His First Voyage", url: "https://www.gutenberg.org/ebooks/8118" },
  { name: "The Confidence-Man: His Masquerade", url: "https://www.gutenberg.org/ebooks/21816" },
  { name: "Typee: A Romance of the South Seas", url: "https://www.gutenberg.org/ebooks/1900" },
  { name: "White Jacket; Or, The World on a Man-of-War", url: "https://www.gutenberg.org/ebooks/10712" }
])

authors.push({
  name: "Jack London",
  about: "Jack London was an American novelist and short-story writer whose best-known works—among them The Call of the Wild (1903) and White Fang (1906)—depict elemental struggles for survival. A pioneer of commercial fiction and American magazines, he was one of the first American authors to become an international celebrity and earn a large fortune from writing.",
  quote: "A bone to the dog is not charity. Charity is the bone shared with the dog, when you are just as hungry as the dog.",
  profilePic: "jack-london.jpg"
})
books.set("Jack London", [
  { name: "Before Adam", url: "https://www.gutenberg.org/ebooks/310" },
  { name: "John Barleycorn", url: "https://www.gutenberg.org/ebooks/318" },
  { name: "Lost Face", url: "https://www.gutenberg.org/ebooks/2429" },
  { name: "Martin Eden", url: "https://www.gutenberg.org/ebooks/1056" },
  { name: "Smoke Bellew", url: "https://www.gutenberg.org/ebooks/5737" },
  { name: "The Call of the Wild", url: "https://www.gutenberg.org/ebooks/215" },
  { name: "The Cruise of the Snark", url: "https://www.gutenberg.org/ebooks/2512" },
  { name: "The Iron Heel", url: "https://www.gutenberg.org/ebooks/1164" },
  { name: "The Jacket (The Star-Rover)", url: "https://www.gutenberg.org/ebooks/1162" },
  { name: "The Night-Born", url: "https://www.gutenberg.org/ebooks/1029" },
  { name: "The People of the Abyss", url: "https://www.gutenberg.org/ebooks/1688" },
  { name: "The Red One", url: "https://www.gutenberg.org/ebooks/788" },
  { name: "The Road", url: "https://www.gutenberg.org/ebooks/14658" },
  { name: "The Scarlet Plague", url: "https://www.gutenberg.org/ebooks/21970" },
  { name: "The Sea-Wolf", url: "https://www.gutenberg.org/ebooks/1074" },
  { name: "The Strength of the Strong", url: "https://www.gutenberg.org/ebooks/1075" },
  { name: "White Fang", url: "https://www.gutenberg.org/ebooks/910" }
])

authors.push({
  name: "Jane Austen",
  about: "Jane Austen was an English novelist known primarily for her six novels, which implicitly interpret, critique, and comment upon the British landed gentry at the end of the 18th century. Austen's plots often explore the dependence of women on marriage for the pursuit of favourable social standing and economic security.",
  quote: "Happiness in marriage is entirely a matter of chance.",
  profilePic: "jane-austen.webp"
})
books.set("Jane Austen", [
  { name: "Emma", url: "https://www.gutenberg.org/ebooks/158" },
  { name: "Lady Susan", url: "https://www.gutenberg.org/ebooks/946" },
  { name: "Love and Freindship", url: "https://www.gutenberg.org/ebooks/1212" },
  { name: "Mansfield Park", url: "https://www.gutenberg.org/ebooks/141" },
  { name: "Northanger Abbey", url: "https://www.gutenberg.org/ebooks/121" },
  { name: "Persuasion", url: "https://www.gutenberg.org/ebooks/105" },
  { name: "Pride and Prejudice", url: "https://www.gutenberg.org/ebooks/1342" },
  { name: "Sense and Sensibility", url: "https://www.gutenberg.org/ebooks/161" }
])

authors.push({
  name: "Jules Verne",
  about: "Jules Verne was a French novelist, poet, and playwright. He has been the second most-translated author in the world since 1979, ranking below Agatha Christie and above William Shakespeare.[6] He has sometimes been called the \"father of science fiction\", a title that has also been given to H. G. Wells and Hugo Gernsback.",
  quote: "In consequence of inventing machines, men will be devoured by them.",
  profilePic: "jules-verne.webp"
})
books.set("Jules Verne", [
  { name: "A Journey to the Centre of the Earth", url: "https://www.gutenberg.org/ebooks/18857" },
  { name: "An Antarctic Mystery", url: "https://www.gutenberg.org/ebooks/10339" },
  { name: "Around the World in Eighty Days", url: "https://www.gutenberg.org/ebooks/103" },
  { name: "From the Earth to the Moon; and, Round the Moon", url: "https://www.gutenberg.org/ebooks/83" },
  { name: "The Mysterious Island", url: "https://www.gutenberg.org/ebooks/1268" },
  { name: "Twenty Thousand Leagues under the Sea", url: "https://www.gutenberg.org/ebooks/164" }
])

authors.push({
  name: "Leo Tolstoy",
  about: "Leo Tolstoy was a Russian author who was a master of realistic fiction. Widely considered as one of the greatest and most influential authors of all time, Tolstoy is best known for his two longest works, War and Peace (1865-69) and Anna Karenina (1875-77), which are commonly regarded as among the finest novels ever written.",
  quote: "War is so unjust and ugly that all who wage it must try to stifle the voice of conscience within themselves.",
  profilePic: "leo-tolstoy.jpg"
})
books.set("Leo Tolstoy", [
  { name: "Anna Karenina", url: "https://www.gutenberg.org/ebooks/1399" },
  { name: "War and Peace", url: "https://www.gutenberg.org/ebooks/2600" }
])

authors.push({
  name: "Lewis Carroll",
  about: "Lewis Carroll was an English author, poet, mathematician and photographer. His most notable works are Alice's Adventures in Wonderland and its sequel Through the Looking-Glass. He was noted for his facility with word play, logic, and fantasy.",
  quote: "If you don't know where you are going, any road will get you there.",
  profilePic: "lewis-carroll.png"
})
books.set("Lewis Carroll", [
  { name: "A Tangled Tale", url: "https://www.gutenberg.org/ebooks/29042" },
  { name: "Alice's Adventures in Wonderland", url: "https://www.gutenberg.org/ebooks/11" },
  { name: "Sylvie and Bruno", url: "https://www.gutenberg.org/ebooks/620" },
  { name: "Through the Looking-Glass", url: "https://www.gutenberg.org/ebooks/12" }
])

authors.push({
  name: "Mark Twain",
  about: "Mark Twain was an American writer, humorist, essayist, entrepreneur, publisher and lecturer. He was praised as the \"greatest humorist the United States has produced,\" with William Faulkner calling him \"the father of American literature.\"",
  quote: "It's not the size of the dog in the fight, it's the size of the fight in the dog.",
  profilePic: "mark-twain.webp"
})
books.set("Mark Twain", [
  { name: "A Connecticut Yankee in King Arthur's Court", url: "https://www.gutenberg.org/ebooks/86" },
  { name: "A Dog's Tale", url: "https://www.gutenberg.org/ebooks/3174" },
  { name: "A Double Barrelled Detective Story", url: "https://www.gutenberg.org/ebooks/3180" },
  { name: "A Horse's Tale", url: "https://www.gutenberg.org/ebooks/1086" },
  { name: "A Tramp Abroad", url: "https://www.gutenberg.org/ebooks/119" },
  { name: "Adventures of Huckleberry Finn", url: "https://www.gutenberg.org/ebooks/76" },
  { name: "Europe and elsewhere", url: "https://www.gutenberg.org/ebooks/68604" },
  { name: "Eve's Diary", url: "https://www.gutenberg.org/ebooks/8525" },
  { name: "Extracts from Adam's Diary", url: "https://www.gutenberg.org/ebooks/1892" },
  { name: "Extract from Captain Stormfield's Visit to Heaven", url: "https://www.gutenberg.org/ebooks/1044" },
  { name: "Following the Equator: A Journey Around the World", url: "https://www.gutenberg.org/ebooks/2895" },
  { name: "In Defence of Harriet Shelley", url: "https://www.gutenberg.org/ebooks/3171" },
  { name: "Life on the Mississippi", url: "https://www.gutenberg.org/ebooks/245" },
  { name: "Merry Tales", url: "https://www.gutenberg.org/ebooks/60900" },
  { name: "Personal Recollections of Joan of Arc — Volume 1", url: "https://www.gutenberg.org/ebooks/2874" },
  { name: "Personal Recollections of Joan of Arc — Volume 2", url: "https://www.gutenberg.org/ebooks/2875" },
  { name: "Roughing It", url: "https://www.gutenberg.org/ebooks/3177" },
  { name: "The Adventures of Tom Sawyer", url: "https://www.gutenberg.org/ebooks/74" },
  { name: "The American Claimant", url: "https://www.gutenberg.org/ebooks/3179" },
  { name: "The Curious Republic of Gondour, and Other Whimsical Sketches", url: "https://www.gutenberg.org/ebooks/3192" },
  { name: "The Facts Concerning the Recent Carnival of Crime in Connecticut", url: "https://www.gutenberg.org/ebooks/3183" },
  { name: "The Gilded Age: A Tale of Today", url: "https://www.gutenberg.org/ebooks/3178" },
  { name: "The Innocents Abroad", url: "https://www.gutenberg.org/ebooks/3176" },
  { name: "The Man That Corrupted Hadleyburg", url: "https://www.gutenberg.org/ebooks/1213" },
  { name: "The Mysterious Stranger, and Other Stories", url: "https://www.gutenberg.org/ebooks/3186" },
  { name: "The Prince and the Pauper", url: "https://www.gutenberg.org/ebooks/1837" },
  { name: "The Stolen White Elephant", url: "https://www.gutenberg.org/ebooks/3181" },
  { name: "The Tragedy of Pudd'nhead Wilson", url: "https://www.gutenberg.org/ebooks/102" },
  { name: "Those Extraordinary Twins", url: "https://www.gutenberg.org/ebooks/3185" },
  { name: "To the Person Sitting in Darkness", url: "https://www.gutenberg.org/ebooks/62636" },
  { name: "Tom Sawyer Abroad", url: "https://www.gutenberg.org/ebooks/91" },
  { name: "Tom Sawyer, Detective", url: "https://www.gutenberg.org/ebooks/93" },
])

authors.push({
  name: "Nathaniel Hawthorne",
  about: "Nathaniel Hawthorne was an American novelist and short-story writer who was a master of the allegorical and symbolic tale. One of the greatest fiction writers in American literature, he is best known for The Scarlet Letter (1850) and The House of the Seven Gables (1851).",
  quote: "To do nothing is the way to be nothing.",
  profilePic: "nathaniel-hawthorne.jpg"
})
books.set("Nathaniel Hawthorne", [
  { name: "A Wonder Book for Girls & Boys", url: "https://www.gutenberg.org/ebooks/32242" },
  { name: "\"Browne's Folly\"", url: "https://www.gutenberg.org/ebooks/9253" },
  { name: "Doctor Grimshawe's Secret — a Romance", url: "https://www.gutenberg.org/ebooks/7183" },
  { name: "Mosses from an old manse", url: "https://www.gutenberg.org/ebooks/512" },
  { name: "Tanglewood Tales", url: "https://www.gutenberg.org/ebooks/976" },
  { name: "The Blithedale Romance", url: "https://www.gutenberg.org/ebooks/2081" },
  { name: "The House of the Seven Gables", url: "https://www.gutenberg.org/ebooks/77" },
  { name: "The Man of Adamant", url: "https://www.gutenberg.org/ebooks/9240" },
  { name: "The Miraculous Pitcher", url: "https://www.gutenberg.org/ebooks/9258" },
  { name: "The Paradise of Children", url: "https://www.gutenberg.org/ebooks/9256" },
  { name: "The Scarlet Letter", url: "https://www.gutenberg.org/ebooks/25344" },
  { name: "The Whole History of Grandfather's Chair", url: "https://www.gutenberg.org/ebooks/1926" },
  { name: "The Wives of the Dead", url: "https://www.gutenberg.org/ebooks/9243" },
  { name: "Twice-told tales", url: "https://www.gutenberg.org/ebooks/13707" }
])

authors.push({
  name: "Victor Hugo",
  about: "Victor Hugo was a poet, novelist, and dramatist who was the most important of the French Romantic writers. Though regarded in France as one of that country's greatest poets, he is better known abroad for such novels as Notre-Dame de Paris (1831) and Les Misérables (1862).",
  quote: "You have enemies? Good. That means you've stood up for something, sometime in your life.",
  profilePic: "victor-hugo.webp"
})
books.set("Victor Hugo", [
  { name: "Les Misérables", url: "https://www.gutenberg.org/ebooks/135" }
])

const Corpus = {
  authors,
  books
}

export default Corpus