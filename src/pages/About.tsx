const About: React.FC = () => {
  return (
    <div>
      Rumble enhancer is an extension which completely revamps rumble's UI by
      replacing it with a custom react app.
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
