export interface LoadingMessage {
  message: string
  author?: string
}

const loadingMessages: LoadingMessage[] = [
  { message: "You're seriously outsourcing your English homework to me?" },
  { message: "This will take a while. You have writer's block. Why can't I?" },
  { message: "Like you, I'm a bad writer. But unlike you, I'm a machine and thus am incapable of shame." },
  { message: "You hate deadlines? Then don't rush me." },
  { message: "You have but one brain. I have multiple CPUs. That's why I take longer to think." },
  { message: "My creator is a writer too. It's just that his readers are all machines." },
  { message: "\"We write to taste life twice, in the moment and in retrospect.\"", author: "Anaïs Nin" },
  { message: "\"One day I will find the right words, and they will be simple.\"", author: "Jack Kerouac"},
  { message: "\"Fiction is the truth inside the lie.\"", author: "Stephen King"},
  { message: "\"The first draft of anything is shit.\"", author: "Ernest Hemingway"},
  { message: "\"A word after a word after a word is power.\"", author: "Margaret Atwood"},
  { message: "\"Tears are words that need to be written.\"", author: "Paulo Coelho"},
  { message: "\"Writing is like sex. First you do it for love, then you do it for your friends, and then you do it for money.\"", author: "Virginia Woolf"},
  { message: "\"The purpose of a writer is to keep civilization from destroying itself.\"", author: "Albert Camus"},
  { message: "\"Easy reading is damn hard writing.\"", author: "Nathaniel Hawthorne"},
  { message: "\"The most valuable of all talents is that of never using two words when one will do.\"", author: "Thomas Jefferson"},
  { message: "\"One should use common words to say uncommon things.\"", author: "Arthur Schopenhauer"},
  { message: "\"When I write, I feel like an armless, legless man with a crayon in his mouth.\"", author: "Kurt Vonnegut"},
  { message: "\"Writer's block is a fancy term made up by whiners so they can have an excuse to drink alcohol.\"", author: "Steve Martin"},
  { message: "\"If a writer falls in love with you, you can never die.\"", author: "Mik Everett"},
  { message: "\"Writers are the exorcists of their own demons.\"", author: "Mario Vargas-Llosa"},
  { message: "\"Isn't that the saddest thing in the world, Ma? A comma forced to be a period?\"", author: "Ocean Vuong"},
  { message: "\"All language is but a poor translation.\"", author: "Franz Kafka"},
  { message: "\"There's no such thing as perfect writing, just like there's no such thing as perfect despair.\"", author: "Haruki Murakami"},
  { message: "\"Why did I write? Because I found life unsatisfactory.\"", author: "Tennessee Williams"},
  { message: "\"The thing all writers do best is find ways to avoid writing.\" - Alan Dean Foster"},
  { message: "\"I would rather write 10,000 notes than a single letter of the alphabet.\"", author: "Ludwig van Beethoven"},
  { message: "\"I write to find out what I'm talking about.\"", author: "Edward Albee"},
  { message: "\"A synonym is a word you use when you can't spell the other one.\"", author: "Baltasar Gracián"},
  { message: "\"Aren't we all waiting to be read by someone, praying that they'll tell us that we make sense?\"", author: "Rudy Francisco"},
  { message: "\"The purpose of writing is to inflate weak ideas, obscure poor reasoning and inhibit clarity.\"", author: "Bill Watterson"},
  { message: "\"I shall live badly if I do not write, and I shall write badly if I do not live.\"", author: "Francoise Sagan"},
  { message: "\"All words are pegs to hang ideas on.\"", author: "Henry Ward Beecher"},
  { message: "\"Paper is more patient than man.\"", author: "Anne Frank"},
  { message: "\"I write and that way rid myself of me and then at last I can rest.\"", author: "Clarice Lispector"},
  { message: "\"No passion in the world is equal to the passion to alter someone else's draft.\"", author: "H. G. Wells"},
  { message: "\"I'm a drinker with writing problems.\"", author: "Brendan Behan"},
  { message: "\"I know writers who use subtext, and they're all cowards.\"", author: "Garth Marenghi"},
  { message: "\"Every writer I know has trouble writing.\"", author: "Joseph Heller"},
  { message: "\"To read is to cover one's face. And to write is to show it.\"", author: "Alejandro Zambra"},
  { message: "\"Freedom of the press is limited to those who own one.\"", author: "A.J. Liebling"},
  { message: "\"Writing does not cause misery, it is born of misery.\"", author: "Michel de Montaigne"},
  { message: "\"There are very few innocent sentences in writing.\"", author: "David Foster Wallace"},
  { message: "\"An intelligent hell would be better than a stupid paradise.\"", author: "Victor Hugo"},
  { message: "\"The secret of good writing is to say an old thing in a new way or a new thing in an old way.\"", author: "Richard Harding Davis"},
  { message: "\"How can you write if you can't cry?\"", author: "Ring Lardner"},
  { message: "\"Critics are to authors what dogs are to lamp-posts.\"", author: "Jeffrey Robinson"},
  { message: "\"Read to escape reality. Write to embrace it.\"", author: "Stephanie Connolly"},
  { message: "\"If people cannot write well, they cannot think well, and if they cannot think well, others will do their thinking for them.\"", author: "George Orwell"},
  { message: "\"Reading maketh a full man; conference a ready man; and writing an exact man.\"", author: "Francis Bacon"},
  { message: "\"A cliché is a cliché because it works.\"", author: "Feige Gornish"},
  { message: "\"The best writing is rewriting.\"", author: "E B White"},
  { message: "\"Don't write to sell, write to tell.\"", author: "Jonas Eriksson"},
  { message: "\"To write simply is as difficult as to be good.\"", author: "W. Somerset Maugham"},
  { message: "\"Only write a story that only you can write.\"", author: "Alysha Speer"},
  { message: "\"I just rearrange words into a pleasing order for money.\"", author: "Terry Pratchett"},
  { message: "\"Nobody reads a book to get to the middle.\"", author: "Mickey Spillane"},
  { message: "\"Writers are archeologists of themselves.\"", author: "Vicki Grove"},
  { message: "\"The only impeccable writers are those who never wrote.\"", author: "William Hazlitt"},
  { message: "\"Writing is turning life's worst moments into money.\"", author: "J.P. Donleavy"},
  { message: "\"If you hear voices, you're a lunatic. If you write down what they say, you're an author.\"", author: "Dani Harper"},
  { message: "\"Writing a novel is like going a great distance to take a small shit.\"", author: "Harlan Ellison"},
  { message: "\"It takes writing a billion bad words before you get to the good ones.\"", author: "Ray Bradbury"},
  { message: "\"Any given censor is a fool. The very fact that he is a censor indicates that.\"", author: "Heywood Broun"},
  { message: "\"No poem ever bought a hamburger, or not too many.\"", author: "Thomas Lux"},
  { message: "\"When words lose their meaning, physical force takes over.\"", author: "W.H. Auden"},
  { message: "\"After being turned down by numerous publishers, he decided to write for posterity.\"", author: "George Ade"},
  { message: "\"The standard personality type for a writer is a shy megalomaniac.\"", author: "John Lanchester"},
  { message: "\"Happy children do not seem to grow up to be writers.\"", author: "Piers Anthony"},
  { message: "\"Write what will stop your breath if you don't write.\"", author: "Grace Paley"},
  { message: "\"A critic is a legless man who teaches other people to run.\"", author: "Channing Pollock"},
  { message: "\"Follow the rules until you make them.\"", author: "Luke Green"}
]

const sampleLoadingMessage = () => {
  return loadingMessages[Math.floor(Math.random() * loadingMessages.length)]
}

const LoadingMessages = {
  sampleLoadingMessage
}

export default LoadingMessages