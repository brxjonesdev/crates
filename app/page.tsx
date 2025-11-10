
import { Button } from "@/lib/components/shadcn/button"
import { Music, Users, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="h-5 w-5" />
            <span className="font-medium text-sm">mixtape</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How it works
            </a>
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-balance leading-[1.1]">
            Create mixtapes
            <br />
            <span className="italic">with friends</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Curate vibe-based music collections where each track tells part of the story and everyone helps shape the
            atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto">
              Start creating
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              See how it works
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          <div className="space-y-4">
            <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-medium">Set the vibe</h3>
            <p className="text-muted-foreground leading-relaxed">
              Pick cover art, add a title, and write a description that sets the mood. Your theme guides every
              contribution.
            </p>
          </div>

          <div className="space-y-4">
            <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-medium">Invite friends</h3>
            <p className="text-muted-foreground leading-relaxed">
              Friends suggest songs that match the vibe and leave notes about why each track fits. Collaboration shapes
              the collection.
            </p>
          </div>

          <div className="space-y-4">
            <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
              <Music className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-medium">Curate the flow</h3>
            <p className="text-muted-foreground leading-relaxed">
              Review submissions, choose your favorites, and arrange the order to shape the emotional journey of your
              mixtape.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-accent rounded-lg p-12 md:p-20 text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic text-balance leading-relaxed">
            "It's not just a playlist.
            <br />
            It's a moment. A shared feeling.
            <br />A small story told through sound."
          </blockquote>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16">How it works</h2>

        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-sm text-muted-foreground font-mono">01</span>
              <h3 className="text-2xl font-medium">Create your theme</h3>
              <p className="text-muted-foreground leading-relaxed">
                Choose the aesthetic, write the mood, and set the tone for your collaborative mixtape. Every great
                collection starts with intention.
              </p>
            </div>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="h-20 w-20 bg-accent rounded-lg mx-auto mb-4" />
                <div className="text-sm text-muted-foreground">Cover Art Preview</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 md:order-2">
              <span className="text-sm text-muted-foreground font-mono">02</span>
              <h3 className="text-2xl font-medium">Collaborate with friends</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your friends add songs that match the vibe and share why each track belongs. Everyone contributes to the
                atmosphere.
              </p>
            </div>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center md:order-1">
              <div className="space-y-3 w-full max-w-xs px-8">
                <div className="h-12 bg-accent rounded flex items-center px-4 text-sm">Track suggestion 1</div>
                <div className="h-12 bg-accent rounded flex items-center px-4 text-sm">Track suggestion 2</div>
                <div className="h-12 bg-accent rounded flex items-center px-4 text-sm">Track suggestion 3</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-sm text-muted-foreground font-mono">03</span>
              <h3 className="text-2xl font-medium">Shape the journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Arrange tracks to create emotional flow. Your mixtape becomes a curated experience that tells a story
                only you and your friends can tell.
              </p>
            </div>
            <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="grid grid-cols-3 gap-3 w-full max-w-xs px-8">
                <div className="h-24 bg-accent rounded" />
                <div className="h-24 bg-accent rounded" />
                <div className="h-24 bg-accent rounded" />
                <div className="h-24 bg-accent rounded" />
                <div className="h-24 bg-accent rounded" />
                <div className="h-24 bg-accent rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 py-32">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-light text-balance">Start your first mixtape</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Create shared moments through music with the people who matter to you.
          </p>
          <Button size="lg">Get started for free</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Music className="h-4 w-4" />
              <span className="text-sm text-muted-foreground">mixtape</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
