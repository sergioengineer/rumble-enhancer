import { Text } from "@nextui-org/react"
const About: React.FC = () => {
  return (
    <div>
      <Text
        size={20}
        css={{
          textGradient: "45deg, $primaryLight -20%, $primary 60%",
        }}
        weight="bold"
      >
        Rumble enhancer
      </Text>{" "}
      is an extension which completely revamps rumble's UI by replacing it with
      a custom react app.
      <br />
      This extension has no affiliation with Rumble.com website and is
      maintained through an open source(many collaborators) project.
      <br />
      <label>For more information: visit </label>
      <a
        href="https://github.com/sergioengineer/rumble-enhancer"
        style={{ color: "var(--accent-color)" }}
      >
        https://github.com/sergioengineer/rumble-enhancer
      </a>
    </div>
  )
}
export default About
