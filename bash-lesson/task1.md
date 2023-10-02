# Task 1

For every command in the table above:

- Provide a short explanation summarizing its purpose
- Provide a couple of usage examples

## Command List

| Command  | Description                                                        | Usage Examples                                                         |
| -------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| `sudo`   | Execute a command as the superuser 🚨 Careful!                     | Run `sudo apt-get update` to update packages                           |
|          |                                                                    | Use `sudo reboot` to restart the system                                |
|          |                                                                    | Install a package with `sudo apt install`                              |
| `tail`   | Display the end of a text file 📄                                  | View the last 10 lines of a log file:                                  |
|          |                                                                    | `tail -n 10 logfile.txt`                                               |
|          |                                                                    | Real-time monitor a file:                                              |
|          |                                                                    | `tail -f access.log`                                                   |
| `pwd`    | Print (or present?) working directory ➡️                           | Show the current working directory:                                    |
|          |                                                                    | `pwd`                                                                  |
|          |                                                                    | Use in scripts to get the script's location.                           |
| `head`   | Display the beginning of a text file 📄                            | View the first 10 lines of a file:                                     |
|          |                                                                    | `head -n 10 file.txt`                                                  |
|          |                                                                    | Display the header of a CSV file:                                      |
|          |                                                                    | `head -n 1 data.csv`                                                   |
| `ls`     | List files and directories in the current directory 📂             | List files in the current directory:                                   |
|          |                                                                    | `ls`                                                                   |
|          |                                                                    | List files with details and hidden files:                              |
|          |                                                                    | `ls -al`                                                               |
| `more`   | Display text one screen at a time 📄                               | Page through a long text file interactively:                           |
|          |                                                                    | `more longfile.txt`                                                    |
|          |                                                                    | Display content with line numbers:                                     |
|          |                                                                    | `more -n file.txt`                                                     |
| `mkdir`  | Create (make?) a new directory 📁                                  | Create a new directory named "mydir":                                  |
|          |                                                                    | `mkdir mydir`                                                          |
|          |                                                                    | Create multiple directories:                                           |
|          |                                                                    | `mkdir dir1 dir2 dir3`                                                 |
| `less`   | Display text with backward navigation 📄                           | Navigate through a text file using arrow keys:                         |
|          |                                                                    | `less file.txt`                                                        |
|          |                                                                    | Search for a pattern within the file:                                  |
|          |                                                                    | `less -p "pattern" file.txt`                                           |
| `cd`     | Change the current directory 📂                                    | Change to the home directory:                                          |
|          |                                                                    | `cd ~`                                                                 |
|          |                                                                    | Change to a specific directory:                                        |
|          |                                                                    | `cd /path/to/directory`                                                |
| `which`  | Locate a command 🧭                                                | Find the location of the `node` executable:                            |
|          |                                                                    | `which node`                                                           |
|          |                                                                    | Locate the `python3` interpreter:                                      |
|          |                                                                    | `which python3`                                                        |
| `touch`  | Create an empty file 📄                                            | Create an empty file named "newfile.txt":                              |
|          |                                                                    | `touch newfile.txt`                                                    |
|          |                                                                    | Update the timestamp of an existing file:                              |
|          |                                                                    | `touch existingfile.txt`                                               |
| `grep`   | Search for patterns in text 💀 you can use regex 🔍                | Search for "error" in a log file:                                      |
|          |                                                                    | `grep "error" logfile.txt`                                             |
|          |                                                                    | Use regular expressions to find email addresses:                       |
|          |                                                                    | `grep -E "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$" text.txt` |
| `echo`   | Display a message or variable value 💬 like console.log a variable | Print a message to the console:                                        |
|          |                                                                    | `echo "Hello, world!"`                                                 |
|          |                                                                    | Display the value of a variable:                                       |
|          |                                                                    | `echo $variable_name`                                                  |
| `man`    | Display the manual page for a command 📖                           | View the manual page for `ls` command:                                 |
|          |                                                                    | `man ls`                                                               |
|          |                                                                    | Access the manual page for `grep`:                                     |
|          |                                                                    | `man grep`                                                             |
| `cat`    | Concatenate and display file content 📄                            | Display the content of a text file:                                    |
|          |                                                                    | `cat file.txt`                                                         |
|          |                                                                    | Combine multiple files and display their content:                      |
|          |                                                                    | `cat file1.txt file2.txt`                                              |
| `source` | Execute commands from a file in the current shell 📜               | Execute commands from a shell script:                                  |
|          |                                                                    | `source myscript.sh`                                                   |
|          |                                                                    | Load environment variables from a file:                                |
|          |                                                                    | `source env_vars.sh`                                                   |
| `rm`     | Remove files or directories 🗑️                                     | Delete a file named "oldfile.txt":                                     |
|          |                                                                    | `rm oldfile.txt`                                                       |
|          |                                                                    | Remove a directory and its contents recursively:                       |
|          |                                                                    | `rm -r mydir`                                                          |
| `find`   | Search for files and directories 🔎                                | Find all text files in the current directory:                          |
|          |                                                                    | `find . -type f -name "*.txt"`                                         |
|          |                                                                    | Search for directories with a specific name:                           |
|          |                                                                    | `find /path/to/search -type d -name "mydir"`                           |
| `chown`  | Change file ownership 🔐                                           | Change ownership of a file to a different user:                        |
|          |                                                                    | `chown newowner:group file.txt`                                        |
|          |                                                                    | Recursively change ownership of a directory:                           |
|          |                                                                    | `chown -R newowner:group mydir`                                        |
| `chmod`  | Change file permissions 🔒                                         | Set read and write permissions for a file:                             |
|          |                                                                    | `chmod u+rw file.txt`                                                  |
|          |                                                                    | Make a script executable by the owner:                                 |
|          |                                                                    | `chmod u+x script.sh`                                                  |

You can collaborate with your teammates on these tasks.

That doesn't mean copy/pasting from others 😊, but researching and discussing together. Collaboration helps a lot in learning and clarifying new information.
