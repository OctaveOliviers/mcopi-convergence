# LaTeX's \include writes a separate auxiliary file for each chapter.
use File::Path qw(make_path);
make_path(map { "build/$_" } qw(
    Declaration Abstract Acknowledgement
    Chapter1 Chapter2 Chapter3 Chapter4 Chapter5 Chapter6 Chapter7
));

# Generate the notation list when nomencl's input changes.
add_cus_dep('nlo', 'nls', 0, 'make_nomenclature');

sub make_nomenclature {
    return system('makeindex', '-s', 'nomencl.ist',
                  '-o', "$_[0].nls", "$_[0].nlo");
}
