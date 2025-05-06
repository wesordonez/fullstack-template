import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  EnvelopeIcon,
  SparklesIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import duLogoBlack from '@/assets/logos/du-logo-black.png'
import duLogoWhite from '@/assets/logos/du-logo-white.png'
import { useTheme } from '@/context/ThemeContext'
import { scrollToSection } from '@/utils/scrollToSection'

const products = [
  {
    name: 'Hero Section',
    description: 'A bold introduction to your site and what you do.',
    href: '#hero',
    icon: SparklesIcon,
  },
  {
    name: 'Features Section',
    description: 'Showcase your site\'s key features and benefits.',
    href: '#features',
    icon: GlobeAltIcon,
  },
  {
    name: 'Contact Form',
    description: 'Let users reach out directly from your site.',
    href: '#contact',
    icon: EnvelopeIcon,
  },
  {
    name: 'Call To Action Section',
    description: 'Prompt users to take the next step with a clear and impactful Call to Action (CTA).',
    href: '#cta',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Footer Section',
    description: 'Wrap up your site with links and copyright info.',
    href: '#footer',
    icon: DocumentTextIcon,
  },
]
const callsToAction = [
  { name: 'Watch demo', href: '#features', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#contact', icon: PhoneIcon },
]

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()
  return (
    <div className="ml-4 flex items-center gap-2">
      <Switch checked={isDark} onCheckedChange={toggleTheme} aria-label="Toggle dark mode" />
      <span>{isDark ? '🌙' : '☀️'}</span>
    </div>
  )
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isDark } = useTheme()
  const navigate = useNavigate()

  const handleSectionClick = (sectionId) => {
    // Close mobile menu if open
    setMobileMenuOpen(false)
    
    // If we're not on the home page, navigate there first
    if (window.location.pathname !== '/') {
      console.log('navigating to home')
      navigate('/')
      // Wait for navigation to complete before scrolling
      setTimeout(() => scrollToSection(sectionId), 100)
    } else {
      // If we're already on home page, just scroll
      console.log('scrolling to section', sectionId)
      scrollToSection(sectionId)
    }
  }

  return (
    <header className="bg-white dark:bg-gray-900">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Dunosis LLC</span>
            <img
              alt="Dunosis Logo"
              src={isDark ? duLogoWhite : duLogoBlack}
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-gray-100 hover:text-accent dark:hover:text-accent">
              Home
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-900 group-hover:bg-white dark:group-hover:bg-gray-800">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900 dark:text-gray-100">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:bg-gray-900">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link to="/about" className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100 hover:text-accent dark:hover:text-accent">
            About
          </Link>
          <Link to="/contact" className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100 hover:text-accent dark:hover:text-accent">
            Contact
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemeToggle />
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Dunosis LLC</span>
              <img
                alt=""
                src={isDark ? duLogoWhite : duLogoBlack}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800">
                    Home
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <button
                  onClick={() => handleSectionClick('features')}
                  className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Features
                </button>
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Contact
                </Link>
                <button
                  onClick={() => handleSectionClick('footer')}
                  className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Footer
                </button>
              </div>
              <div className="py-6">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
